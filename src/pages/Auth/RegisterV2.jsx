import {
  Avatar,
  Button,
  CardBody,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../../services/authService";
import { useLoadingStore } from "../../store/loadingStore";

export const RegisterV2 = () => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isEmployee, setIsEmployee] = useState();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    data.employeeNo = isEmployee ? data.employeeNo : "";
    delete data.confirmPassword;

    const res = await createAccount(data);
    setLoading(false);

    if (res.isSuccess) {
      toast.success(res.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      toast.error(res.message);
    }
  };

  const password = watch("password");

  return (
    <main className="grid h-screen w-screen grid-cols-3 bg-white">
      <section className="col-span-2 w-full place-self-center">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-10 p-10">
            <Input id="role" type="hidden" value="User" {...register("role")} />

            <FormControl isInvalid={errors.regionCode}>
              <FormLabel htmlFor="regionCode">
                Region Code <span className="text-red-500">*</span>
              </FormLabel>
              <Input
                borderColor="lightgray"
                id="regionCode"
                placeholder="Enter region code"
                type="text"
                {...register("regionCode", { required: true })}
              />
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </FormLabel>
              <Input
                borderColor="lightgray"
                id="email"
                placeholder="Enter email address"
                type="email"
                {...register("email", { required: true })}
              />
            </FormControl>

            <FormControl isInvalid={errors.firstName}>
              <FormLabel htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </FormLabel>
              <Input
                borderColor="lightgray"
                id="firstName"
                placeholder="Enter first name"
                type="text"
                {...register("firstName", { required: true })}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="middleName">Middle Name</FormLabel>
              <Input
                borderColor="lightgray"
                id="middleName"
                placeholder="Enter middle name"
                type="text"
                {...register("middleName", { required: true })}
              />
            </FormControl>

            <FormControl isInvalid={errors.lastName}>
              <FormLabel htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </FormLabel>
              <Input
                borderColor="lightgray"
                id="lastName"
                placeholder="Enter last name"
                type="text"
                {...register("lastName", { required: true })}
              />
            </FormControl>

            <FormControl isInvalid={errors.address}>
              <FormLabel htmlFor="address">
                Address <span className="text-red-500">*</span>
              </FormLabel>
              <Input
                borderColor="lightgray"
                id="address"
                placeholder="Enter address"
                type="text"
                {...register("address", { required: true })}
              />
            </FormControl>

            <FormControl isInvalid={errors.password}>
              <FormLabel htmlFor="password">
                Password <span className="text-red-500">*</span>
              </FormLabel>
              <InputGroup>
                <Input
                  borderColor="lightgray"
                  id="password"
                  placeholder="Enter password"
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

            <FormControl isInvalid={errors.confirmPassword}>
              <FormLabel htmlFor="confirmPassword">
                Confirm Password <span className="text-red-500">*</span>
              </FormLabel>
              <InputGroup>
                <Input
                  borderColor="lightgray"
                  id="confirmPassword"
                  placeholder="Enter confirm password"
                  type={showConfirm ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                <InputRightElement className="text-gray-500">
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </InputRightElement>
              </InputGroup>
              {errors.confirmPassword && (
                <FormHelperText color="red.500">
                  {errors.confirmPassword.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl as="fieldset">
              <FormLabel as="legend">
                Are you an existing employee?{" "}
                <span className="text-red-500">*</span>
              </FormLabel>
              <RadioGroup defaultValue="no">
                <HStack spacing="24px">
                  <Radio
                    borderColor="lightgray"
                    id="yes"
                    value="yes"
                    onChange={() => setIsEmployee(true)}
                  >
                    Yes
                  </Radio>
                  <Radio
                    borderColor="lightgray"
                    id="no"
                    value="no"
                    onChange={() => setIsEmployee(false)}
                  >
                    No
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            {isEmployee ? (
              <FormControl isInvalid={errors.employeeNo}>
                <FormLabel htmlFor="employeeNo">
                  Employee No. <span className="text-red-500">*</span>
                </FormLabel>
                <Input
                  borderColor="lightgray"
                  id="employeeNo"
                  placeholder="Enter employee no."
                  type="text"
                  {...register("employeeNo", { required: true })}
                />
                <FormHelperText>
                  *Only applicable to existing employee
                </FormHelperText>
              </FormControl>
            ) : (
              <FormControl isDisabled>
                <FormLabel htmlFor="employeeNoDummy">
                  Employee No. <span className="text-red-500">*</span>
                </FormLabel>
                <Input
                  borderColor="lightgray"
                  id="employeeNoDummy"
                  placeholder="Enter employee no."
                  type="text"
                />
                <FormHelperText>
                  *Only applicable to existing employee
                </FormHelperText>
              </FormControl>
            )}
          </div>
        </form>
      </section>
      <section className="col-span-1 flex items-start justify-center bg-login-image bg-cover pt-28 shadow-md">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="start"
          gap="1rem"
        >
          <Avatar size="xl" />
          <Text fontSize="1.5rem" fontWeight="bold">
            Register Account
          </Text>
          <Button
            onClick={() => formRef.current.requestSubmit()}
            colorScheme="blue"
            className="w-full"
          >
            Register
          </Button>
          <div className="inline-flex w-full justify-center gap-x-1 text-sm">
            <p>Already registered?</p>
            <Link to={`/login`} className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </Flex>
      </section>
    </main>
  );
};
