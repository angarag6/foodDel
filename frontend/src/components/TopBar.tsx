'use client';
import { useRouter } from "next/navigation";
import Bag from "./icons/Bag";
import Pinecone from "./icons/Pinecone";
import Profile from "./icons/Profile";
import Search from "./icons/Search";
import React, { useState } from "react";
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function TorBar() {
    const router = useRouter();
    const [activeButton, setActiveButton] = useState("text-black");
    let check = 1;

    const area = () => {
        router.push("/area");
        setActiveButton("#18BA51")
    };

    const foodMenu = () => {
        router.push("/foodMenu");
        check = 2
    };

    const home = () => {
        router.push("/home");
        check = 1
    };

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      type Anchor = 'top' | 'left' | 'bottom' | 'right';

      const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };
        const list = (anchor: 'right') => (
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          );
    

    return (
        <div className="flex justify-between px-[24px] py-[8px] w-[1258px] bg-white">
            <div className="flex gap-[24px] justify-center items-center">
                <Pinecone />
                <div className="flex gap-[8px]">
                    <button onClick={home} className={`text-[14px] px-[16px] py-[8px] ${activeButton}`}>НҮҮР</button>
                    <button onClick={foodMenu} className={`text-[14px] px-[16px] py-[8px] ${activeButton}`}>ХООЛНЫ ЦЭС</button>
                    <button onClick={area} className={`text-[14px] px-[16px] py-[8px] ${activeButton}`}>ХҮРГЭЛТИЙН БҮС</button>
                </div>
            </div>
            <div className="flex justify-center items-center gap-[8px]">
                <div className="flex gap-[8px] px-[16px] py-[8px] border-[1px] border-black rounded-[8px] justify-center items-center">
                    <Search />
                    <input className="outline-none text-[16px] bg-white" type="text" placeholder="Хайх" />
                </div>
                <div onClick={toggleDrawer('right',true)} className="flex justify-center items-center gap-[8px] px-[16px] py-[8px]">
                    <Bag />
                    <div className="z-20">
                            <React.Fragment key='right'>
                            <Drawer
                                anchor={'right'}
                                open={state['right']}
                                onClose={toggleDrawer('right', false)}
                            >
                                {list('right')}
                            </Drawer>
                            </React.Fragment>
                    </div>
                    <p className="text-[14px] text-black">Сагс</p>
                </div>
                <div className="flex justify-center items-center gap-[8px] px-[16px] py-[8px]">
                    <Profile />
                    <p className="text-[14px] text-black">Нэвтрэх</p>
                </div>
            </div>
        </div>
    );
}