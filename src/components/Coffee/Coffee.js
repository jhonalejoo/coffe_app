import { StyleSheet, FlatList, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CoffeeLottie from '../lotties/CoffeeLottie';
import { focusCoffee, getCoffeesLoading } from '../../state/features/coffee/reducers';
import CoffeeItem from './components/CoffeeItem';
import Modal from "react-native-modal";
import { createCommentsLoading } from '../../state/features/comment/reducers';
import { QUERIES_STATUS, colors } from '../../utils/constants';


const Coffee = ({ navigation }) => {

  const dispatch = useDispatch();
  const coffeeState = useSelector(state => state.coffee);
  const getCoffees = coffeeState.getCoffees;
  const focusCoffeeState = coffeeState.focusCoffee;
  const commentState = useSelector(state => state.comment);
  const statusComment = commentState.createComments;
  const [isModalVisible, setModalVisible] = useState(false);
  const [commentForm, setCommentForm] = useState({});
  const validationForm= commentForm?.name && commentForm?.email && commentForm?.phone && commentForm?.comment; 

  useEffect(() => {
    dispatch(getCoffeesLoading())
  }, [])

  useEffect(() => {
    if (!statusComment.isLoading && statusComment.status ===QUERIES_STATUS.SUCCESS){
      setModalVisible(false)
      alert('Commentario Creado')
    }
       
  }, [statusComment])

  const handleCreateComment = () => {
    let data = {
      name_user: commentForm.name,
      email_user: commentForm.email,
      phone_user: commentForm.phone,
      comment: commentForm.comment,
      coffe_id: focusCoffeeState.id
    }
    dispatch(createCommentsLoading(data))
  }
  const changeForm = (field, value) => {
    setCommentForm({
      ...commentForm,
      [field]: value
    })
  };
  const handleAction = (item) => {
    dispatch(focusCoffee(item))
    setModalVisible(true)
  }
  const renderItem = ({ item, index }) => {
    return (
      <CoffeeItem action={() => handleAction(item)} index={index} item={item} />
    )
  }

  return (
    <View style={[styles.container, getCoffees.isLoading && { alignItems: 'center', justifyContent: 'center' }]}>
      {
        getCoffees.isLoading &&
        <CoffeeLottie />
      }
      <FlatList
        keyExtractor={item => item.id}
        data={getCoffees.coffees}
        renderItem={renderItem}
      />
      <Modal
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
        <View style={styles.contentModal}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Ingresa los datos</Text>
          <View style={styles.contentInput}>
            <TextInput
              placeholder='Nombre'
              value={commentForm.name}
              onChangeText={(text) => changeForm('name', text)}
              style={styles.inputText}
            />
            <TextInput
              placeholder='Correo'
              value={commentForm.email}
              onChangeText={(text) => changeForm('email', text)}
              style={styles.inputText}
            />
            <TextInput
              placeholder='Telefono'
              keyboardType='numeric'
              value={commentForm.phone}
              onChangeText={(text) => changeForm('phone', text)}
              style={styles.inputText}
            />
            <TextInput
              placeholder=''
              multiline={true}
              numberOfLines={3}
              value={commentForm.comment}
              onChangeText={(text) => changeForm('comment', text)}
              style={styles.inputText}
            />
          </View>
          <TouchableOpacity
            disabled={!validationForm}
            onPress={handleCreateComment}
            style={{...styles.button,backgroundColor:validationForm ? colors.primary :'#dddddd'}}>
            <Text style={styles.textButton}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default Coffee

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  contentModal: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    bordecontentInputrColor: 'rgba(0, 0, 0, 0.1)',
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    backgroundColor: '#FCFCFC',
    padding: 10,
    width: '100%',
    marginVertical: 5
  },
  contentInput: {
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#674334',
    marginTop: 10,
    borderRadius: 5,
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: 'white',
    fontSize: 13
  },
})