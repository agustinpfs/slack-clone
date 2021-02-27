import React from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { enterRoom } from './features/appSlice';
import { db } from "./firebase";



function SidebarOption({ Icon, title, AddChannelOption, id }) {
    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt('Please add channel name!');

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }


    return (
        <SidebarOptionConteiner
            onClick={AddChannelOption ? addChannel : selectChannel}
        >

            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                    <SidebarOptionChanel>
                        <span>#</span> {title}
                    </SidebarOptionChanel>
                )
            }
        </SidebarOptionConteiner>
    )
}

export default SidebarOption

const SidebarOptionConteiner = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`
const SidebarOptionChanel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`
