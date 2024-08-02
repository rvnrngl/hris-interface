import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { useLoadingStore } from "../../store/loadingStore";
import { updatePassword } from "../../services/authService";
import toast from "react-hot-toast";

export const UpdatePassword = ({ userAccessId }) => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    delete data.confirmPassword;

    const res = await updatePassword(data);
    setLoading(false);
    reset();

    if (res.isSuccess) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  const password = watch("password");

  return (
    <>
      <Text className="mb-6" fontWeight="bold">
        Update Credentials
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid gap={6} className="mb-5 md:grid-cols-2">
          <Input
            id="passwordUserAccessId"
            type="hidden"
            value={userAccessId}
            {...register("userAccessId")}
          />

          <FormControl isInvalid={errors.password} className="mb-5">
            <FormLabel>New Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                placeholder="Enter Current Password"
                type={show.password ? "text" : "password"}
                {...register("password", { required: true })}
              />
              <InputRightElement className="text-gray-500">
                <button
                  type="button"
                  onClick={() =>
                    setShow((prev) => ({
                      ...prev,
                      password: !prev.password,
                    }))
                  }
                >
                  {show.password ? <FaEye /> : <FaEyeSlash />}
                </button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl isInvalid={errors.confirmPassword} className="mb-5">
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                id="confirmPassword"
                placeholder="Enter Confirm Password"
                type={show.confirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <InputRightElement className="text-gray-500">
                <button
                  type="button"
                  onClick={() =>
                    setShow((prev) => ({
                      ...prev,
                      confirmPassword: !prev.confirmPassword,
                    }))
                  }
                >
                  {show.confirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </InputRightElement>
            </InputGroup>
            {errors.confirmPassword && (
              <FormHelperText color="red.500">
                {errors.confirmPassword.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Flex justifyContent="right">
          <Button type="submit" colorScheme="blue">
            Update Password
          </Button>
        </Flex>
      </form>
    </>
  );
};
