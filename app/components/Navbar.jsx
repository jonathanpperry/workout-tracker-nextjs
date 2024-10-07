import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Link href="/" passHref>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                marginRight: "24px",
                color: "white",
                textDecoration: "none",
              }}
              component="span"
            >
              My Workout App
            </Typography>
          </Link>
          <Button color="inherit" href="/workouts">
            Workouts
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {session ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={session.user.image}
                alt="Profile Picture"
                width={40}
                height={40}
                style={{ borderRadius: "50%", marginRight: "8px" }}
              />
              <Button color="inherit" onClick={() => signOut()}>
                Sign Out
              </Button>
            </div>
          ) : (
            <Button color="inherit" onClick={() => signIn("facebook")}>
              Sign in with Facebook
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
