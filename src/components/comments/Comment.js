import { StyleSheet, FlatList, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsLoading } from '../../state/features/comment/reducers';
import CommentItem from './components/CoffeeItem';


const Comment = ({ navigation }) => {

  const dispatch = useDispatch();
  const commentState = useSelector(state => state.comment);
  const getComments = commentState.getComments;
  const statusComment = commentState.createComments;

  useEffect(() => {
    dispatch(getCommentsLoading())
  }, [])
  const handleAction = (item) => {
    
  }
  const renderItem = ({ item, index }) => {
    return (
      <CommentItem action={() => handleAction(item)} index={index} item={item} />
    )
  }


  return (
    <View style={[styles.container]}>
       <FlatList
        keyExtractor={item => item.id}
        data={getComments.comments}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Comment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
})