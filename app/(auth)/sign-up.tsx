import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { images } from '@/constants'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    username:''
  });

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    console.log('user is creating...')
    try {
      const result = await createUser(form.email, form.password, form.username);
      // setUser(result);
      // setIsLogged(true);
      console.log(result, "my result")

      router.push("/home");
    } catch (error:any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
      router.push("/home");
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
    <ScrollView>
    <View
          className="w-full flex justify-center items-center h-full px-4 my-6"
        
        >
<Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]'/>
<Text className='text-2xl text-white text-semibold  font-semibold'>Sign Up to Aora</Text>
<FormField
            title="User Name"
            value={form.username}
            handleChangeText={(e:any) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          
          />
          
<FormField
            title="Email"
            value={form.email}
            handleChangeText={(e:any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e:any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />


<CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyle="mt-7 w-full"
            isLoading={isSubmitting}
          />
             <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href='sign-in'
              className="text-lg font-psemibold text-secondary"
            >
              Sigin
            </Link>
          </View>
      </View>
    </ScrollView>

   </SafeAreaView>
  )
}

export default SignUp