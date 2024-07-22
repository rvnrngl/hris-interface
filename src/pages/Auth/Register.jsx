import {
  Button,
  CardBody,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../../services/authService";
import { useLoadingStore } from "../../store/loadingStore";

export const Register = () => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isEmployee, setIsEmployee] = useState();
  const navigate = useNavigate();

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
    <>
      <CardBody className="w-full md:w-[730px]">
        <h1 className="mb-5 text-center text-2xl font-bold">
          Register Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 grid h-[350px] w-full grid-cols-1 gap-5 overflow-y-scroll px-2 pb-3 sm:grid-cols-2">
            <Input id="role" type="hidden" value="User" {...register("role")} />

            <FormControl isInvalid={errors.regionCode}>
              <FormLabel htmlFor="regionCode">
                Region Code <span className="text-red-500">*</span>
              </FormLabel>
              <Input
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
                id="firstName"
                placeholder="Enter first name"
                type="text"
                {...register("firstName", { required: true })}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="middleName">Middle Name</FormLabel>
              <Input
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
                    id="yes"
                    value="yes"
                    onChange={() => setIsEmployee(true)}
                  >
                    Yes
                  </Radio>
                  <Radio
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
          <Button type="submit" colorScheme="blue" className="mb-5 w-full">
            Register
          </Button>
          <div className="inline-flex w-full justify-center gap-x-1 text-sm">
            <p>Already registered?</p>
            <Link to={`/login`} className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </CardBody>
    </>
  );
};
