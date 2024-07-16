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
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Register = () => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isEmployee, setIsEmployee] = useState();
  return (
    <>
      <CardBody className="w-full md:w-[730px]">
        <h1 className="mb-5 text-center text-2xl font-bold">
          Register Account
        </h1>
        <form>
          <div className="mb-5 grid h-[350px] w-full grid-cols-1 gap-5 overflow-y-scroll px-2 pb-3 sm:grid-cols-2">
            <Input type="hidden" value="User"></Input>
            <FormControl>
              <FormLabel htmlFor="regionCode">
                Region Code <span className="text-red-500">*</span>
              </FormLabel>
              <Input
                id="regionCode"
                placeholder="Enter region code"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </FormLabel>
              <Input
                id="email"
                placeholder="Enter email address"
                type="email"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </FormLabel>
              <Input
                id="firstName"
                placeholder="Enter first name"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="middleName">Middle Name</FormLabel>
              <Input
                id="middleName"
                placeholder="Enter middle name"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </FormLabel>
              <Input id="lastName" placeholder="Enter last name" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="address">
                Address <span className="text-red-500">*</span>
              </FormLabel>
              <Input id="address" placeholder="Enter address" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">
                Password <span className="text-red-500">*</span>
              </FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  placeholder="Enter password"
                  type={show ? "text" : "password"}
                />
                <InputRightElement className="text-gray-500">
                  <button onClick={() => setShow(!show)}>
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="confirmPassword">
                Confirm Password <span className="text-red-500">*</span>
              </FormLabel>
              <InputGroup>
                <Input
                  id="confirmPassword"
                  placeholder="Enter confirm password"
                  type={showConfirm ? "text" : "password"}
                />
                <InputRightElement className="text-gray-500">
                  <button onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </InputRightElement>
              </InputGroup>
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
              <FormControl>
                <FormLabel htmlFor="employeeNo">
                  Employee No. <span className="text-red-500">*</span>
                </FormLabel>
                <Input
                  id="employeeNo"
                  placeholder="Enter employee no."
                  type="text"
                />
                <FormHelperText>
                  *Only applicable to existing employee
                </FormHelperText>
              </FormControl>
            ) : (
              <FormControl isDisabled>
                <FormLabel htmlFor="employeeNo">
                  Employee No. <span className="text-red-500">*</span>
                </FormLabel>
                <Input
                  id="employeeNo"
                  placeholder="Enter employee no."
                  type="text"
                />
                <FormHelperText>
                  *Only applicable to existing employee
                </FormHelperText>
              </FormControl>
            )}
          </div>
          <Button colorScheme="blue" className="mb-5 w-full">
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
