import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import CustomHeader from '@/components/customHeader'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"

          options={{
            header:()=> <CustomHeader />,
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

   
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})