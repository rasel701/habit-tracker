// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { Link, Outlet } from "react-router";
// import { UserAuthContext } from "../../contexts/AuthContext";
// import { HomeIcon, LayoutDashboard, LogOut, User } from "lucide-react";

// const drawerWidth = 240;

// const Dashboard = () => {
//   const { user, logoutUser } = React.useContext(UserAuthContext);
//   const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//     ({ theme }) => ({
//       flexGrow: 1,
//       padding: theme.spacing(3),
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       marginLeft: `-${drawerWidth}px`,
//       variants: [
//         {
//           props: ({ open }) => open,
//           style: {
//             transition: theme.transitions.create("margin", {
//               easing: theme.transitions.easing.easeOut,
//               duration: theme.transitions.duration.enteringScreen,
//             }),
//             marginLeft: 0,
//           },
//         },
//       ],
//     })
//   );

//   const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//     ({ theme, open }) => ({
//       flexGrow: 1,
//       padding: theme.spacing(2),
//       transition: theme.transitions.create("margin"),
//       marginLeft: open && window.innerWidth >= 768 ? `${drawerWidth}px` : 0,
//     })
//   );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: `${drawerWidth}px`,
//         transition: theme.transitions.create(["margin", "width"], {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//       },
//     },
//   ],
// }));

//   const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== "open",
//   })(({ theme, open }) => ({
//     transition: theme.transitions.create(["margin", "width"]),
//     width:
//       open && window.innerWidth >= 768
//         ? `calc(100% - ${drawerWidth}px)`
//         : "100%",
//     marginLeft: open && window.innerWidth >= 768 ? `${drawerWidth}px` : 0,
//   }));

//   const DrawerHeader = styled("div")(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-end",
//   }));

//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
// const handleLogout = () => {
//   logoutUser()
//     .then(() => {
//       toast.success("Logout successfully");
//     })
//     .catch((error) => {
//       toast.error(error.message);
//     });
// };
//   return (
//     <div>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar position="fixed" open={open} sx={{ bgcolor: "gray" }}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               sx={[
//                 {
//                   mr: 2,
//                 },
//                 open && { display: "none" },
//               ]}
//             >
//               <MenuIcon />
//             </IconButton>
//             <div className="flex justify-between items-center w-full">
//               <Typography variant="h6" component="div">
//                 <Link to="/" className="flex items-center gap-2">
//                   <span className="text-xl md:text-2xl font-black tracking-tighter text-primary">
//                     HABIT<span className="text-secondary">TRACKER</span>
//                   </span>
//                 </Link>
//               </Typography>
//               <div className="dropdown dropdown-end">
//                 <div
//                   tabIndex={0}
//                   role="button"
//                   className="avatar hover:opacity-80 transition"
//                 >
//                   <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//                     <img
//                       src={
//                         user?.photoURL || "https://i.ibb.co/mDPt7vX/user.png"
//                       }
//                       alt="User Profile"
//                     />
//                   </div>
//                 </div>
//                 <ul
//                   tabIndex={0}
//                   className="dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-2xl w-60 border border-base-200"
//                 >
//                   <div className="px-4 py-3 border-b border-base-200 mb-2">
//                     <p className="font-bold text-sm text-gray-500">
//                       {user?.displayName}
//                     </p>
//                     <p className="text-xs text-gray-500 truncate">
//                       {user?.email}
//                     </p>
//                   </div>
//                   <li>
//                     <Link
//                       className="flex items-center gap-2 py-3 text-gray-500"
//                       to={"/"}
//                     >
//                       <HomeIcon size={18} />
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/dashboard"
//                       className="flex items-center gap-2 py-3 text-gray-500"
//                     >
//                       <LayoutDashboard size={18} /> Dashboard
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/profile"
//                       className="flex items-center gap-2 py-3 text-gray-500"
//                     >
//                       <User size={18} /> Profile
//                     </Link>
//                   </li>
//                   <div className="divider my-0"></div>
//                   <li>
//                     <button
//                       onClick={handleLogout}
//                       className="flex items-center gap-2 py-3 text-error hover:bg-error/10"
//                     >
//                       <LogOut size={18} /> Logout
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: drawerWidth,
//               boxSizing: "border-box",
//             },
//           }}
//           variant={window.innerWidth < 768 ? "temporary" : "persistent"}
//           anchor="left"
//           open={open}
//         >
//           <DrawerHeader>
//             <IconButton onClick={handleDrawerClose}>
//               {theme.direction === "ltr" ? (
//                 <ChevronLeftIcon />
//               ) : (
//                 <ChevronRightIcon />
//               )}
//             </IconButton>
//           </DrawerHeader>
//           <Divider />
//           <List>
//             {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {["All mail", "Trash", "Spam"].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//         <Main open={open}>
//           <DrawerHeader />
//           <Outlet />
//         </Main>
//       </Box>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useContext } from "react";
import { Link, Outlet } from "react-router";
import { UserAuthContext } from "../../contexts/AuthContext";
import { HomeIcon, LayoutDashboard, LogOut, User } from "lucide-react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Dashboard = () => {
  const { user, logoutUser } = useContext(UserAuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-gray-400">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-6"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="flex justify-between items-center w-full px-6">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-primary">
                  HABIT<span className="text-secondary">TRACKER</span>
                </span>
              </Link>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar hover:opacity-80 transition"
                >
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        user?.photoURL || "https://i.ibb.co/mDPt7vX/user.png"
                      }
                      alt="User Profile"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-2xl w-60 border border-base-200"
                >
                  <div className="px-4 py-3 border-b border-base-200 mb-2">
                    <p className="font-bold text-sm text-gray-500">
                      {user?.displayName}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user?.email}
                    </p>
                  </div>
                  <li>
                    <Link
                      className="flex items-center gap-2 py-3 text-gray-500"
                      to={"/"}
                    >
                      <HomeIcon size={18} />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 py-3 text-gray-500"
                    >
                      <LayoutDashboard size={18} /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/my-profile"
                      className="flex items-center gap-2 py-3 text-gray-500"
                    >
                      <User size={18} /> Profile
                    </Link>
                  </li>
                  <div className="divider my-0"></div>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 py-3 text-error hover:bg-error/10"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Page content here */}
          <div className="p-4">
            <Outlet />
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible my-6">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <Link
                  to={"/dashboard/my-habit"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="myhabit"
                >
                  <ListAltIcon size={18} />
                  <span className="is-drawer-close:hidden">My Habit</span>
                </Link>
              </li>

              {/* List item */}
              <li>
                <Link
                  to={"/dashboard/weekly-summary"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  <AccessTimeIcon size={18} />
                  <span className="is-drawer-close:hidden">Weekly Summary</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
