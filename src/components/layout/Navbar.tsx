import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import {
  Button,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddPost from "../posts/AddPost";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          ></Typography>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button
              sx={{
                marginRight: 1,
              }}
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleClickOpen}
            >
              New Post
            </Button>
            <button
              type="button"
              className="rounded-full bg-white p-1 text-gray-400 hover:text-blue focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="" alt="" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </StyledToolbar>
      </AppBar>
      <AddPost
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
      />
    </Box>
  );
}
