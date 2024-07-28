import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/Page/PageWrapper";
import { PageHeader } from "../../components/Page/PageHeader";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/authStore";
import { UserAvatar } from "../../components/Avatar/UserAvatar";
import { FaCheck, FaXmark } from "react-icons/fa6";
import profileImage from "../../assets/profile/profile.png";
import toast from "react-hot-toast";
import { saveUserProfile } from "../../services/userService";
import { useLoadingStore } from "../../store/loadingStore";

export const UserProfile = () => {
  const user = useAuthStore((state) => state.user);
  const setUserProfile = useAuthStore((state) => state.setUserProfile);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: user });

  const [initialValues, setInitialValues] = useState(user);

  useEffect(() => {
    setInitialValues(user);
    reset(user);
  }, [user, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await saveUserProfile(data);
    setLoading(false);

    if (res.isSuccess) {
      const result = { email: user.email, ...res.data };
      setUserProfile(result);
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  const onCancel = () => {
    reset(initialValues);
  };

  return (
    <PageWrapper>
      <Card position="relative" className="mt-24">
        <Box
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          className="-top-[75px] h-[150px] w-[150px] md:-top-[100px] md:h-[200px] md:w-[200px]"
        >
          <UserAvatar size="full" src={profileImage} />
        </Box>

        <CardBody className="mt-20">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="userId"
              type="hidden"
              value={user.userId}
              {...register("userId")}
            />
            <Input
              id="userAccessId"
              type="hidden"
              value={user.userAccessId}
              {...register("userId")}
            />
            <Input
              id="positionId"
              type="hidden"
              value={user.positionId}
              {...register("positionId")}
            />
            <Input
              id="divisionId"
              type="hidden"
              value={user.divisionId}
              {...register("divisionId")}
            />
            <Input
              id="approverSetUpId"
              type="hidden"
              value={user.approverSetUpId}
              {...register("approverSetUpId")}
            />
            <Input
              id="createId"
              type="hidden"
              value={user.createId}
              {...register("createId")}
            />
            <Input
              id="lastUpdateId"
              type="hidden"
              value={user.lastUpdateId}
              {...register("lastUpdateId")}
            />
            <Input
              id="createDate"
              type="hidden"
              value={user.createDate}
              {...register("createDate")}
            />
            <Input
              id="lastUpdateDate"
              type="hidden"
              value={user.lastUpdateDate}
              {...register("lastUpdateDate")}
            />

            <Box className="mb-5">
              <Text className="mb-6" fontWeight="bold">
                User Information
              </Text>
              <Grid gap={6} className="mb-5 md:grid-cols-2">
                <FormControl variant="floating" id="firstName">
                  <Input
                    type="text"
                    placeholder=" "
                    {...register("firstName")}
                  />
                  <FormLabel>First Name</FormLabel>
                </FormControl>

                <FormControl variant="floating" id="middleName">
                  <Input
                    type="text"
                    placeholder=" "
                    {...register("middleName")}
                  />
                  <FormLabel>Middle Name</FormLabel>
                </FormControl>

                <FormControl variant="floating" id="lastName">
                  <Input
                    type="text"
                    placeholder=" "
                    {...register("lastName")}
                  />
                  <FormLabel>Last Name</FormLabel>
                </FormControl>

                <FormControl variant="floating" id="address">
                  <Input type="text" placeholder=" " {...register("address")} />
                  <FormLabel>Address</FormLabel>
                </FormControl>
              </Grid>

              <Flex justifyContent="right" gap={4}>
                <Button type="submit" leftIcon={<FaCheck />} colorScheme="blue">
                  Save
                </Button>
                <Button
                  type="button"
                  leftIcon={<FaXmark />}
                  colorScheme="gray"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </Flex>
            </Box>

            <Text className="mb-6" fontWeight="bold">
              User Credentials
            </Text>
            <Grid gap={6} className="mb-5 md:grid-cols-2">
              <FormControl variant="floating" id="employeeNo">
                <Input
                  isReadOnly
                  type="text"
                  placeholder=" "
                  value={user.employeeNo ? user.employeeNo : "001"}
                  {...register("employeeNo")}
                />
                <FormLabel>Employee No.</FormLabel>
              </FormControl>

              <FormControl variant="floating" id="email">
                <Input
                  isReadOnly
                  type="email"
                  placeholder=" "
                  {...register("email")}
                />
                <FormLabel>Email</FormLabel>
              </FormControl>

              <Box>
                <Button
                  onClick={() => toast("Nothing yet!")}
                  type="button"
                  colorScheme="blue"
                >
                  Update Password
                </Button>
              </Box>
            </Grid>
          </form>
        </CardBody>
      </Card>
    </PageWrapper>
  );
};
