import {
  Box,
  Text
} from "@chakra-ui/react";
import "@fontsource/raleway/";
import "@fontsource/ubuntu/";
import ReactPannellum, { addScene } from "react-pannellum";

function App() {
  return (
    <Box w="100%" h="auto" bgColor="gray.100" pb='9'>
      <Box w="100%" h="4px" bgGradient="linear(to-br, #F09819, #FF512F)" />
      <Box
        w="100%"
        h="auto"
        bgColor="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py="27px"
        shadow="sm"
      >
        <Text
          bgGradient="linear(to-br, #F09819, #FF512F)"
          bgClip="text"
          fontSize="xl"
          fontWeight="bold"
        >
          360°
        </Text>
      </Box>
      <Box
        margin="0 auto"
        w="65%"
        h="auto"
        borderRadius="md"
        bgColor="white"
        mt="9"
        shadow="md"
        p={5}
        display="flex"
        flexDir="column"
        justifyContent="flex-start"
        alignItems="center"
        color="white"
      >
        {/* Konte */}
        <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource="dapur.jpg"
          // equirectangularOption={{

          // }}
          config={{
            uiText: {
              loadButtonLabel: "Lihat Konte",
            },
            type: "equirectangular",
            showFullscreenCtrl: true,
            showZoomCtrl: true,
            keyboardZoom: true,
            haov: 360,
            vaov: 120,
            mouseZoom: true,
            compass: true,
            preview: "https://pannellum.org/images/alma_preview.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 0,
                type: "scene",
                text: "Exterior",
                sceneId: "house",
              },
            ],
          }}
          onPanoramaLoaded={() => {
            addScene(
              "house",
              {
                title: "Exterior",
                hfov: 110,
                yaw: 5,
                type: "equirectangular",
                imageSource: "https://pannellum.org/images/from-tree.jpg",
                hotSpots: [
                  {
                    pitch: -0.6,
                    yaw: 37.1,
                    type: "scene",
                    text: "Interior",
                    sceneId: "firstScene",
                    targetYaw: -23,
                    targetPitch: 2,
                  },
                ],
              },
              console.log("Panorama added")
            );
          }}
        />

        {/* Bang Eja */}
        <Box w='100%' my='5' />
        <ReactPannellum
          id="2"
          sceneId="firstScene"
          imageSource="360bangeja.jpg"
          config={{
            uiText: {
              loadButtonLabel: "Lihat Rumah Bang Eja",
            },
            type: "equirectangular",
            title: "Ruang Keluarga",
            showFullscreenCtrl: true,
            showZoomCtrl: true,
            keyboardZoom: true,
            mouseZoom: true,
            compass: true,
            preview: "https://pannellum.org/images/alma_preview.jpg",
            hotSpots: [
              {
                pitch: 180,
                yaw: 0,
                type: "scene",
                text: "Pekarangan Rumah",
                sceneId: "house",
              },
            ],
          }}
          onPanoramaLoaded={() => {
            addScene(
              "house",
              {
                title: "Pekarangan Rumah",
                hfov: 110,
                yaw: 5,
                type: "equirectangular",
                imageSource: "https://pannellum.org/images/from-tree.jpg",
                hotSpots: [
                  {
                    pitch: -0.6,
                    yaw: 37.1,
                    type: "scene",
                    text: "Interior",
                    sceneId: "firstScene",
                    targetYaw: -23,
                    targetPitch: 2,
                  },
                ],
              },
              console.log("Panorama added")
            );
          }}
        />
      </Box>
    </Box>
  );
}

export default App;
