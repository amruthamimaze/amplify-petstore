/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createPet, updatePet } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
const client = generateClient();
export default function AddPet(props) {
  const { pet, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useState("");
  const [
    textFieldThreeEightSevenThreeFourSevenNineValue,
    setTextFieldThreeEightSevenThreeFourSevenNineValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useState("");
  const [
    textFieldThreeEightSevenThreeFiveOneFiveValue,
    setTextFieldThreeEightSevenThreeFiveOneFiveValue,
  ] = useState("");
  const [
    textFieldThreeEightSevenThreeFourEightSixValue,
    setTextFieldThreeEightSevenThreeFourEightSixValue,
  ] = useState("");
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = async () => {
    await client.graphql({
      query: createPet.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
          age: textFieldThreeEightSevenThreeFourSevenNineValue,
          breed: textFieldTwoNineSevenSixSixNineTwoThreeValue,
          about: textFieldTwoNineSevenSixSixNineTwoFourValue,
          image: textFieldThreeEightSevenThreeFiveOneFiveValue,
          color: textFieldThreeEightSevenThreeFourEightSixValue,
        },
      },
    });
  };
  const buttonThreeEightSevenThreeFiveTwoTwoOnClick = async () => {
    await client.graphql({
      query: updatePet.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
          age: textFieldThreeEightSevenThreeFourSevenNineValue,
          breed: textFieldTwoNineSevenSixSixNineTwoThreeValue,
          about: textFieldTwoNineSevenSixSixNineTwoFourValue,
          image: textFieldThreeEightSevenThreeFiveOneFiveValue,
          color: textFieldThreeEightSevenThreeFourEightSixValue,
          id: pet?.id,
        },
      },
    });
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddPet")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="480px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add Pet"
            {...getOverrideProps(overrides, "Add Pet")}
          ></Text>
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Name"
            placeholder="Plushie"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Breed"
            placeholder="Pug"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="About"
            placeholder="Sweet baby"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Age"
            placeholder="7"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSevenThreeFourSevenNineValue}
            onChange={(event) => {
              setTextFieldThreeEightSevenThreeFourSevenNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3873479")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Color"
            placeholder="Brown"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSevenThreeFourEightSixValue}
            onChange={(event) => {
              setTextFieldThreeEightSevenThreeFourEightSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3873486")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Image"
            placeholder="image-url"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSevenThreeFiveOneFiveValue}
            onChange={(event) => {
              setTextFieldThreeEightSevenThreeFiveOneFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3873515")}
          ></TextField>
        </Flex>
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 438")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeEightSevenThreeFiveTwoTwoOnClick();
            }}
            {...getOverrideProps(overrides, "Button3873522")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
