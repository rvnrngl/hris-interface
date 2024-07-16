import {
  Button,
  CardBody,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <CardBody className="w-full sm:w-[350px]">
        <h1 className="mb-5 text-center text-2xl font-bold">Login</h1>
        <form>
          <FormControl className="mb-5">
            <Input id="regionCode" placeholder="Region Code" type="text" />
          </FormControl>
          <FormControl className="mb-5">
            <Input id="email" placeholder="Email" type="email" />
          </FormControl>
          <FormControl className="mb-5">
            <InputGroup>
              <Input
                id="password"
                placeholder="Password"
                type={show ? "text" : "password"}
              />
              <InputRightElement className="text-gray-500">
                <button onClick={() => setShow(!show)}>
                  {show ? <FaEye /> : <FaEyeSlash />}
                </button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <p className="mb-5 text-center text-sm text-blue-500 hover:underline">
            Forgot password?
          </p>
          <Button colorScheme="blue" className="mb-5 w-full">
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
