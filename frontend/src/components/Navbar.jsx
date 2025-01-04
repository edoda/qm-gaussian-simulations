import React from "react";
import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "../../public/styles.css";
import { Box, Flex, Text } from "@radix-ui/themes";

const Navbar = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" asChild>
            <Link to="/">Home</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Simulations <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <Flex direction='column' className="List one">
              <Box as='li'>
                <NavigationMenu.Link asChild>
                  <Link to="/rectangular-barrier" className="ListItemLink">
                    <Text size='3' className="ListItemHeading">Rectangular Barrier</Text>
                    {/* <Text size='3' className="ListItemText">
                      Rectangular potential barriers.
                    </Text> */}
                  </Link>
                </NavigationMenu.Link>
              </Box>
              <Box as='li'>
                <NavigationMenu.Link asChild>
                  <Link to="/parabolic-barrier" className="ListItemLink">
                    <Text size='3' className="ListItemHeading">Parabolic Barrier</Text>
                    {/* <Text size='3' className="ListItemText">
                      Parabolic potential barriers.
                    </Text> */}
                  </Link>
                </NavigationMenu.Link>
              </Box>
              <Box as='li'>
                <NavigationMenu.Link asChild>
                  <Link to="/rectangular-well" className="ListItemLink">
                    <Text size='3' className="ListItemHeading">Rectangular Well</Text>
                    {/* <Text size='3' className="ListItemText">
                      Potential well barriers.
                    </Text> */}
                  </Link>
                </NavigationMenu.Link>
              </Box>
            </Flex>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" asChild>
            <Link to="/methods">Methods</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" asChild>
            <Link to="/about">About</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <Box className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </Box>
    </NavigationMenu.Root>
  );
};

export default Navbar;
