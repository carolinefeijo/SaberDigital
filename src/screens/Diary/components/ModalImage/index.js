import { View, Text, Image } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { agendaescolarLogo } from '../../../../assets/images';
import styles from './styles';

export default function ModalImage({ modalImageController, disableModal, image, description }) {
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
                    <Text style={styles.titleDescription}> Comeu bastante fruta e ainda  repetiu e ficou brava porque não demos mais que 3 pedaços.</Text>
                </View>

            </View>

        </Modal>

    );
};


// VERIFICAR DESCRIPTION BACK END ( LENO VAI VERIFICAR ) 
// ARRUMAR A HORA PARA HORA DO BRASIL ( 12:40)
// ARRUMAR "A 12 HORAS ATRAS" FORMATAR PARA O BRASIL ( 2 HORAS ATRÁS )
