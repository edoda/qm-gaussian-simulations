import React from "react";
import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";

const navItems = [
  { label: 'Home', to: '/' },
  { 
    label: 'Simulations',
    subItems: [
      { name: 'Rectangular Barrier', to: '/rectangular-barrier', caption: "Rectangular potential barriers"},
      { name: 'Parabolic Barrier', to: '/parabolic-barrier',  caption: "Rectangular potential barriers" },
      { name: 'Rectangular Well', to: '/rectangular-well',  caption: "Rectangular well barriers" },
    ]
  },
  { label: 'Methods', to: '/methods' },
  { label: 'About', to: '/about' },
];


const Navbar = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        {navItems.map((item) => {
          if (item.subItems) {
            return (
              <NavigationMenu.Item key={item.label}>
                <NavigationMenu.Trigger className="NavigationMenuTrigger" asChild>
                <Text size="3" className="ListItemHeading"> {item.label} <CaretDownIcon className="CaretDown" aria-hidden /> </Text>
                </NavigationMenu.Trigger>

                <NavigationMenu.Content className="NavigationMenuContent">
                  <Flex direction="column">
                    {item.subItems.map((subItem) => (
                      <NavigationMenu.Link key={subItem.to} asChild>
                        <Link to={subItem.to} className="ListItemLink">
                          <Text size="3" className="ListItemHeading">
                            {subItem.name}
                          </Text>
                          {/* {subItem.caption && (
                            <Text size="2" className="ListItemText">
                              {subItem.caption}
                            </Text>
                          )} */}
                        </Link>
                      </NavigationMenu.Link>
                    ))}
                  </Flex>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            );
          }

          return (
            <NavigationMenu.Item key={item.label}>
              <NavigationMenu.Link className="NavigationMenuLink" asChild>
                <Link to={item.to}>{item.label}</Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          );
        })}

        <NavigationMenu.Indicator className="NavigationMenuIndicator" />
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export default Navbar;
