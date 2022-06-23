import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import { Colors, Images, Responsive } from '../Constants';
import ImagePicker from 'react-native-image-crop-picker';
import RNImageToPdf from 'react-native-image-to-pdf';
import RNFS from 'react-native-fs';

const PdfScanner = () => {
  const [arrayOfImage, setArrayOfImage] = useState([]);
  const [showPdfButton, setShowPdfButton] = useState(false);

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={{ uri: item.path }}
          resizeMode="cover"
          style={{
            width: Responsive.wp(45),
            height: Responsive.hp(40),
            marginRight: Responsive.wp(2),
          }}
        />
      </View>
    );
  };

  const OpeningCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
    }).then(image => {
      setShowPdfButton(true);
      setArrayOfImage(prevData => [...prevData, image]);
    });
  };

  const OpeningGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
    }).then(image => {
      setShowPdfButton(true);
      setArrayOfImage(prevData => [...prevData, ...image]);
    });
  };

  const imagesToPDF = async () => {
    try {
      const options = {
        // imagePaths: arrayOfImage.map(item => item.path.substring(7)),
        imagePaths: Platform.select({
          ios: arrayOfImage.map(item => item.path),
          android: arrayOfImage.map(item => item.path.substring(7)),
        }),
        name: Platform.select({
          ios: new Date().getTime(),
          android: `${new Date().getTime()}.pdf`,
        }),
        maxSize: {
          // optional maximum image dimension - larger images will be resized
          width: 900,
          height: Math.round((Responsive.hp(100) / Responsive.wp(100)) * 900),
        },
        quality: 0.7, // optional compression paramter
        targetPathRN: '/storage/emulated/0/Download/', // only for android version 9 and lower
        //for versions higher than 9 it is stored in (Download/img-to-pdf/)
      };
      const pdf = await RNImageToPdf.createPDFbyImages(options);
      await DownloadPDF(pdf.filePath, options.name);
    } catch (e) {
      console.log('Error from PDF....', e);
    }
  };

  const DownloadPDF = async (path, fileName) => {
    const filePath = Platform.select({
      ios: RNFS.DocumentDirectoryPath,
      android: RNFS.ExternalStorageDirectoryPath,
    });
    const newFolder = `${filePath}/TicTacToe`;
    const savingFile = `${newFolder}/${fileName}`;

    try {
      await RNFS.mkdir(newFolder).then(async () => {
        await RNFS.moveFile(path, savingFile).then(() => {
          Alert.alert(
            'Saved Successfully',
            `File Saved Successfully at TicTacToe Folder`,
          );
          console.log(`PDF stored at ${savingFile}`);
        });
      });
    } catch (error) {
      console.log('Error from moving files....', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          height: Responsive.hp(45),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={arrayOfImage}
          contentContainerStyle={{
            paddingHorizontal: Responsive.wp(2),
            marginVertical: Responsive.hp(3),
          }}
          keyExtractor={(v, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={OpeningCamera}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: Colors.black, marginTop: Responsive.hp(3) },
        ]}
        onPress={OpeningGallery}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: '#f1f', marginTop: Responsive.hp(3) },
        ]}
        onPress={() => {
          setShowPdfButton(false);
          setArrayOfImage([]);
        }}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>

      {showPdfButton && (
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: '#f00', marginTop: Responsive.hp(3) },
          ]}
          onPress={imagesToPDF}>
          <Text style={styles.buttonText}>To PDF</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default PdfScanner;

const styles = StyleSheet.create({
  button: {
    width: Responsive.wp(90),
    alignSelf: 'center',
    backgroundColor: Colors.k24a0ed,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Responsive.hp(2),
    borderRadius: 15,
  },
  buttonText: {
    fontSize: Responsive.normalize(16),
    fontWeight: 'bold',
    color: Colors.white,
  },
});
