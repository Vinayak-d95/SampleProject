import { useState, useContext } from "react";
import { userContext } from "../Context/UserProvider";
import { BsChatRight, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Box, Flex, Icon, Text, Image } from "@chakra-ui/react";
import MessageBox from "./MessageBox";

const ChatPage = () => {
  const { users } = useContext(userContext);
  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState();
  const [name, setName] = useState();
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);

  const handleOpenChats = () => {
    setOpen(!open);
  };

  const openMessageBox = (picture, name) => {
    setPicture(picture);
    setName(name);
    setIsMessageBoxOpen(true);
  };

  const handleChildButtonClick = () => {
    setIsMessageBoxOpen(false);
  };

  return (
    <Flex justify="flex-end" pr="1rem">
      {isMessageBoxOpen && (
        <MessageBox
          picture={picture}
          name={name}
          onButtonClick={handleChildButtonClick}
        />
      )}
      <Box
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        w="21%"
        rounded="10px"
      >
        <Flex
          className="text-xl text-white bg-blue-700 p-4 flex items-end justify-between gap-[2rem] rounded-t-[11px] cursor-pointer"
          onClick={handleOpenChats}
        >
          <Icon as={BsChatRight} className="-mr-[8rem]" />
          <Text>Chats</Text>
          {open ? (
            <Icon as={BsChevronDown} onClick={handleChildButtonClick} />
          ) : (
            <Icon as={BsChevronUp} />
          )}
        </Flex>
        {open ? (
          <Box className="p-4 h-[16rem] overflow-y-auto scrollbar-thin">
            {users?.map((user) => (
              <Box key={user.id} style={{ marginBottom: "10px" }}>
                <Flex gap="8" pb="[5px]">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src={user.profilepicture}
                    alt={user.username}
                    onClick={() =>
                      openMessageBox(user.profilepicture, user.name)
                    }
                  />
                  <Text
                    onClick={() =>
                      openMessageBox(user.profilepicture, user.name)
                    }
                  >
                    {user.name}
                  </Text>
                </Flex>
                <div
                  style={{
                    backgroundColor: "green",
                    width: "0.5rem",
                    height: "0.5rem",
                    borderRadius: "50%",
                    float: "right",
                    marginTop: "-23px",
                  }}
                ></div>
              </Box>
            ))}
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Flex>
  );
};

export default ChatPage;
