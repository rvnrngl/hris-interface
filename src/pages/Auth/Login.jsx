import {
  Button,
  CardBody,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaEye, FaEyeSlash, FaGlobe, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../services/authService";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/authStore";
import { useLoadingStore } from "../../store/loadingStore";

export const Login = () => {
  const setUserProfile = useAuthStore((state) => state.setUserProfile);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await userLogin(data);
    setLoading(false);
    if (res.isSuccess) {
      setUserProfile(res.result);
      navigate("/dashboard");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <CardBody className="w-full sm:w-[350px]">
        <h1 className="mb-5 text-center text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.regionCode} className="mb-5">
            <InputGroup>
              <InputLeftElement className="text-gray-500">
                <FaGlobe />
              </InputLeftElement>
              <Input
                id="regionCode"
                placeholder="Enter region code"
                type="text"
                {...register("regionCode", { required: true })}
              />
            </InputGroup>
          </FormControl>

          <FormControl isInvalid={errors.email} className="mb-5">
            <InputGroup>
              <InputLeftElement className="text-gray-500">
                <FaEnvelope />
              </InputLeftElement>
              <Input
                id="email"
                placeholder="Enter email"
                type="text"
                {...register("email", { required: true })}
              />
            </InputGroup>
          </FormControl>

          <FormControl isInvalid={errors.password} className="mb-5">
            <InputGroup>
              <InputLeftElement className="text-gray-500">
                <FaLock />
              </InputLeftElement>
              <Input
                id="password"
                placeholder="Password"
                type={show ? "text" : "password"}
                {...register("password", { required: true })}
              />
              <InputRightElement className="text-gray-500">
                <button type="button" onClick={() => setShow(!show)}>
                  {show ? <FaEye /> : <FaEyeSlash />}
                </button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <div className="mb-5">
            <p
              type="button"
              onClick={() => alert("Nothing yet!")}
              className="mx-auto w-fit cursor-pointer text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </p>
          </div>
          <Button type="submit" colorScheme="blue" className="mb-5 w-full">
            Login
          </Button>
          <div className="inline-flex w-full justify-center gap-x-1 text-sm">
            <p>Don't have an account?</p>
            <Link to={`/register`} className="text-blue-500 hover:underline">
              Signup
            </Link>
          </div>
        </form>
      </CardBody>
    </>
  );
};
