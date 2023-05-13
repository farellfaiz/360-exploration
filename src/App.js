import { 
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react";
import "@fontsource/raleway/";
import "@fontsource/ubuntu/";
import ReactPannellum, { addScene } from "react-pannellum";
import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <Box w='100%' h='100vh' bgColor='gray.100'>
      <Box w='100%' h='4px' bgGradient="linear(to-br, #F09819, #FF512F)" />
      <Box w='100%' h='30px' bgColor='white' display='flex' alignItems='center' justifyContent='center' py='27px' shadow='sm'>
        <Text
          bgGradient="linear(to-br, #F09819, #FF512F)"
          bgClip='text'
          fontSize='xl'
          fontWeight='bold'
        >
          360°
        </Text>
      </Box>
      <Box 
        margin='0 auto' w='65%' h='80%' borderRadius='md' bgColor='white' my='9' shadow='md' p={5}
        display="flex"
        flexDir="column"
        justifyContent="flex-start"
        alignItems="center"
        color="white"
      >
        <Tabs 
          variant='soft-rounded'
          colorScheme="orange"
          isplay="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <TabList>
            <Tab>360 Camera</Tab>
            <Tab>360 Generator</Tab>
            <Tab>Cubemap</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box w='100%'>
                <ReactPannellum
                  id='1'
                  sceneId='firstScene'
                  imageSource='https://pannellum.org/images/alma.jpg'
                  config={{
                    uiText: {
                      loadButtonLabel: "Lihat rumah",
                    },
                    showFullscreenCtrl: true,
                    showZoomCtrl: true,
                    keyboardZoom: true,
                    mouseZoom: true,
                    compass: true,
                    preview: 'https://pannellum.org/images/alma_preview.jpg',
                    hotSpots: [
                      {
                        pitch: 0,
                        yaw: 0,
                        type: "scene",
                        text: "Exterior",
                        sceneId: "house",
                      },
                    ]
                  }}
                  onPanoramaLoaded={() => {
                    addScene(
                      'house',
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
                      console.log('Panorama added')
                    )
                  }}
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>

              </Box>
            </TabPanel>
            <TabPanel>
              <p>asdasdad</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default App;
