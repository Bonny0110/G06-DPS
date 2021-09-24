
import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native';
import {useState} from "react";

const App = () =>{
  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);
  const [modalVisibleConchagua, setModalVisibleConchagua] = useState(false);
  const [modalVisibleCentroHistorico, setModalVisibleCentroHistorico] = useState(false);
  const [modalVisibleLago, setModalVisibleLago] = useState(false);
  const [modalVisibleArtesanias, setModalVisibleArtesanias] = useState(false);
  const [modalVisiblePupusas, setModalVisiblePupusas] = useState(false);
  const [modalVisibleYuca, setModalVisibleYuca] = useState(false);
  const [modalVisibleNuegados, setModalVisibleNuegados] = useState(false);
  const [modalVisibleFlores, setModalVisibleFlores] = useState(false);
  const [modalVisibleFresca, setModalVisibleFresca] = useState(false);
  const [modalVisibleArqueologica, setModalVisibleArqueologica] = useState(false);
  const [modalVisibleSol, setModalVisibleSol] = useState(false);

  return(
      <>
    <ScrollView>
      <Modal transparent={true} animationType="slide" visible={modalVisiblePlaya} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Ir a la playa</Text>
            <Text>El Salvador cuenta con hermosas playas a nivel de Centroamérica.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisiblePlaya(!modalVisiblePlaya)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleConchagua} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Acampar en un volcán</Text>
            <Text>Puedes vivir una experiencia única e inolvidable contemplando el atardecer desde el mirador del volcán Conchagua, donde podrás acampar y tomar buenas fotografías de este hermoso destino.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleConchagua(!modalVisibleConchagua)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleCentroHistorico} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Visitar el Centro Histórico</Text>
            <Text>Te transportarás a las épocas de oro de El Salvador. Podrás apreciar bellos edificios restaurados que guardan el espíritu de la arquitectura colonial que posee la capital.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleCentroHistorico(!modalVisibleCentroHistorico)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleLago} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Relajarte en un hermoso lago</Text>
            <Text>Puedes apreciar la hermosura de un lago de origen volcánico: el lago de Coatepeque. Relájate ante esta maravilla color turquesa.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleLago(!modalVisibleLago)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleArtesanias} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Comprar artesanías</Text>
            <Text>Visita el hermoso municipio de Ilobasco, ubicado en el departamento de Cabañas. Este lugar se destaca en la alfarería, con sus bellos diseños plasmados en cerámica, barro o arcilla. ¡Impresionate del esfuerzo y la dedicación de los artesanos que con gran delicadeza y creatividad modelan cada una de sus obras!</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleArtesanias(!modalVisibleArtesanias)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisiblePupusas} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Pupusas</Text>
            <Text>Disfruta del plato típico por excelencia de El Salvador. Se trata de una tortilla de maíz o arroz, rellena con queso, frijoles, chicharrón u otros ingredientes.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisiblePupusas(!modalVisiblePupusas)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleYuca} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Yuca frita</Text>
            <Text>Disfruta de una riquísima yuca frita, acompañada de curtido, salsa de tomate y pescaditas fritas.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleYuca(!modalVisibleYuca)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleNuegados} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Nuegados</Text>
            <Text>Se trata de un platillo dulce que suele disfrutarse como antojito o postre. Son a base de masa de yuca, con miel de dulce de panela y generalmente se comen acompañados de chilate, una bebida a base de maíz y jengibre</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleNuegados(!modalVisibleNuegados)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleFlores} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Ruta de las flores</Text>
            <Text>Es un recorrido que comprende 6 ciudades: Nahuizalco, Salcoatitán, Juayua, Apaneca, Ataco y Tacuba, todas estas ciudades con mucha tradición cultural e histórica, área de atractivos naturales, excelente clima y bellísimos paisajes.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleFlores(!modalVisibleFlores)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleFresca} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Ruta fresca</Text>
            <Text>La Ruta Fresca, llamada así por la belleza y rico clima de los municipios de La Palma, San Ignacio y Citala. La ruta ofrece alternativas para divertirse al aire libre con familia y amigos. Además de sitios donde pasar la noche, en hoteles y hostales, o al aire libre en espacios rodeados de pinos. La zona alta del departamento de Chalatenango posee un clima agradable, incluso cuando en otras partes del país hay un clima caluroso, allí se tiene un clima de entre 10°C y 18°C.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleFresca(!modalVisibleFresca)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleArqueologica} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Ruta arqueológica</Text>
            <Text>Representa un acercamiento a una de las culturas más avanzadas de  la humanidad: los mayas. El Salvador como parte de la Ruta Regional Mundo Maya cuenta con joyas arqueológicas que le harán viajar en el tiempo para revivir la trayectoria histórica de esta grandiosa civilización.
Uno de los sitios arqueológicos más importantes es Joya de Cerén denominado “Pompeya de América”, un sitio de talla mundial declarado Patrimonio de la humanidad por la UNESCO, al ser el único sitio del mundo maya donde se puede apreciar lo que fuera de la vida cotidiana de sus habitantes.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleArqueologica(!modalVisibleArqueologica)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleSol} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Ruta sol y playa</Text>
            <Text>El Salvador cuenta con la Ruta Sol y Playa donde encontrarás desde increíbles olas para surfear hasta playas de arena dorada.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleSol(!modalVisibleSol)}} ></Button>
          </View>
        </View>
      </Modal>

      <View style={{flexDirection:'row'}} >
      <Image
      style={styles.banner}
      source={require('./src/img/bg.jpg')} />
      </View>

<View style={styles.contenedor}>
      <Text style={styles.titulo}>¿Qué hacer en El Salvador?</Text>
      <ScrollView horizontal>
        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisiblePlaya(!modalVisiblePlaya)}}
          >
          <Image
          style={styles.ciudad}
          source={require('./src/img/actividad1.jpg')} />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleConchagua(!modalVisibleConchagua)}}
          >
          <Image
          style={styles.ciudad}
          source={require('./src/img/actividad2.jpg')} />
          </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight
          onPress={()=>{setModalVisibleCentroHistorico(!modalVisibleCentroHistorico)}}
          >
          <Image
          style={styles.ciudad}
          source={require('./src/img/actividad3.jpg')} />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleLago(!modalVisibleLago)}}
          >
          <Image
          style={styles.ciudad}
          source={require('./src/img/actividad4.jpg')} />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleArtesanias(!modalVisibleArtesanias)}}
          >
          <Image
          style={styles.ciudad}
          source={require('./src/img/actividad5.jpg')} />
          </TouchableHighlight>
        </View>
      </ScrollView>

<Text style={styles.titulo}>Platillos salvadoreños</Text>
      <View>
        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisiblePupusas(!modalVisiblePupusas)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/mejores1.jpg')} />
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleYuca(!modalVisibleYuca)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/mejores2.jpg')} />
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleNuegados(!modalVisibleNuegados)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/mejores3.jpg')} />
          </TouchableHighlight>
        </View>
      </View>

<Text style={styles.titulo}>Rutas turísticas</Text>
      <View style={styles.listado}>
        <View style={styles.listaItem}>
          <TouchableHighlight
          onPress={()=>{setModalVisibleFlores(!modalVisibleFlores)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/ruta1.jpg')} />
          </TouchableHighlight>
        </View>

        <View style={styles.listaItem}>
          <TouchableHighlight
          onPress={()=>{setModalVisibleFresca(!modalVisibleFresca)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/ruta2.jpg')} />
          </TouchableHighlight>
        </View>

        <View style={styles.listaItem}>
          <TouchableHighlight
          onPress={()=>{setModalVisibleArqueologica(!modalVisibleArqueologica)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/ruta3.jpg')} />
          </TouchableHighlight>
        </View>

        <View style={styles.listaItem}>
          <TouchableHighlight
          onPress={()=>{setModalVisibleSol(!modalVisibleSol)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/ruta4.jpg')} />
          </TouchableHighlight>
        </View>
      </View>
    </View>

    </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listaItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },

});

export default App;
