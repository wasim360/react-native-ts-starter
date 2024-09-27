import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
interface IProps{
    title:string;
    handlePress:()=>void;
    containerStyle:any;
    textStyle?:any;
    isLoading?:boolean;
}
const CustomButton = ({title, handlePress, containerStyle, isLoading, textStyle}:IProps) => {
  return (
  <TouchableOpacity className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ?' opacity-50' : ''}`} onPress={handlePress} activeOpacity={0.7} disabled={isLoading}>
    <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>{title}</Text>
  </TouchableOpacity>
  
 
  )
}

export default CustomButton