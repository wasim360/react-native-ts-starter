import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";
import { useMutation } from "react-query";
import { LoginAPI } from "@/api/user";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/users";

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginMutate = useMutation(LoginAPI);
  const { mutate: mutateLogin, data, isError, isLoading, error } = loginMutate;
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Successfully logged in ",
      ToastAndroid.LONG,
      ToastAndroid.TOP
    );
  };
  const onFinish = async () => {
    const finalValues = {
      password: form.password,
      username: form.email,
    };
    try {
      await mutateLogin(finalValues, {
        onSuccess: (res: any) => {
          showToastWithGravity();
          dispatch(login(res?.data))
          
        },
      });
    } catch (error) {
      console.log(error, "error is here");
    }
  };
 
  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center items-center h-full px-4 my-6">
         
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold  font-semibold">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={onFinish}
            containerStyle="mt-7 w-full"
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href={"sign-up" as any}
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
