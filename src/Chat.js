import React from 'react';
import styled from "styled-components";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { InfoOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectRoomId } from './features/appSlice';
import ChatInput from './ChatInput';



function Chat() {
    // extract redux value:
    const roomId = useSelector(selectRoomId);
    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#Room-name</strong></h4>
                        <StarBorderOutlinedIcon />
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlined /> Details
                    </p>
                    </HeaderRight>
                </Header>
                <ChatMessages>
                    {/* list out the messages  */}
                </ChatMessages>
                <ChatInput
                    channelId={roomId}
                />
            </>
        </ChatContainer>
    )
}

export default Chat

const ChatMessages = styled.div`

`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding:  20px;
    border-bottom: 1px solid lightgrey;
`
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`
const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`
const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`