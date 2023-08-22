import { Box, Flex, Icon, Image, Text, Textarea } from "@chakra-ui/react";
import { BsArrowRightCircle, BsChevronDown } from "react-icons/bs";

const MessageBox = (props) => {
  return (
    <Flex justify="center" pr="2rem" style={{ marginTop: "100px" }}>
      {console.log("pic", props.picture)}
      {console.log("name", props.name)}
      <Box
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        w="150%"
        rounded="10px"
      >
        <Flex className="text-xl text-white bg-blue-700 p-4 flex items-end justify-between gap-[1rem] rounded-t-[11px] cursor-pointer">
          <Image
            className="w-8 h-8 rounded-full"
            src={props.picture}
            alt={props.name}
          />
          <Text>{props.name}</Text>
          <span style={{ float: "right" }}>
            <Icon as={BsChevronDown} />
          </span>
          <span style={{ float: "right", marginLeft: "-10px" }}>
            <button className="cancel-button" onClick={props.onButtonClick}>
              <span className="cancel-icon">X</span>
            </button>
          </span>
        </Flex>

        <Box
          className="p-4 h-[16rem] overflow-hidden"
          style={{ width: "250px" }}
        >
          <Box style={{ marginBottom: "10px" }} overflow="auto">
            <Flex gap="8" pb="[5px]">
              <Text style={{ whiteSpace: "normal" }} className="message-bubble">
                <p> Spotlight bulb fksfhksf</p>
              </Text>
            </Flex>
            <Flex gap="8" pb="[5px]" width="100%">
              <Text
                style={{
                  whiteSpace: "normal",
                  marginLeft: "60px",
                  marginTop: "10px",
                }}
                className="message-bubble"
              >
                <p> Spotlight bulb fksfhksf</p>
              </Text>
            </Flex>
            <Flex gap="8" pb="[5px]">
              <Text
                style={{ whiteSpace: "normal", marginTop: "10px" }}
                className="message-bubble"
              >
                <p> Spotlight bulb fksfhksf</p>
              </Text>
            </Flex>
          </Box>
        </Box>
        <Flex justify="space-between" alignItems="center" mt="auto">
          <Textarea
            placeholder="Type your message..."
            rows="3"
            resize="none"
            className="message-textarea"
          />
          <Icon
            as={BsArrowRightCircle}
            boxSize="1.5em"
            color="blue"
            style={{ marginRight: "30px" }}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default MessageBox;
