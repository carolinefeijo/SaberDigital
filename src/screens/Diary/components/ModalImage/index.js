import { View, Text, Image } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { agendaescolarLogo } from '../../../../assets/images';
import styles from './styles';

export default function ModalImage({ modalImageController, disableModal, image, description}) {

    return (
        <Modal
            animationIn={'zoomIn'}
            animationOut={'zoomOut'}
            isVisible={modalImageController}
            onBackdropPress={disableModal}
        >
            <View style={styles.container}>

                <View style={styles.mainContainer}>
                    <Image style={styles.logoAgenda}
                        source={agendaescolarLogo} />
                    <Text style={styles.titleObs}> Observação</Text>
                    <View style={{ width: 20 }}></View>
                </View>

                <View style={styles.lineContainer}></View>

                <Image style={styles.imageDescription}
                    source={{ uri: image }} />

                <View style={styles.descriptionContainer}>
                    <Text style={styles.titleDescription}> {description}</Text>
                </View>

            </View>

        </Modal>

    );
};



