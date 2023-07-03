import { Box, Spinner } from "@chakra-ui/react";

const LoadingScreen = () => (
    <Box
        sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            jusitifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            backgroundColor: "black"
        }}
        >
            <Spinner size="xl" color="red.500" />
        </Box>
);

export default LoadingScreen;