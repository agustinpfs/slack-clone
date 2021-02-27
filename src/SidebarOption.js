import React from 'react';
import styled from "styled-components";
import { db } from "./firebase";
// import { useCollection } from "react-firebase-hooks/firestore";



function SidebarOption({ Icon, title, AddChannelOption, id }) {
    // const [channels, loading, error] = useCollection(db.collection('room'))

    // get de channels, get charge state(loading), if there is an error, we get the error(error)

    const addChannel = () => {
        const channelName = prompt('Please add channel name!');

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {

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
