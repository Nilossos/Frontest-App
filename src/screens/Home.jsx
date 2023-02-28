import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import AuthContext from "../context/context";
import Header from "./Header";

export default function Home() {
  const { userType } = useContext(AuthContext);

  return (
    <View style={styles.layer}>
      <Header>
        {/* Создать элемент-кнопку 'поиск', внести в хедер, создать скрин поиска со стек навиг. */}
        <Text style={styles.header}>Главная</Text>
      </Header>
     <View style={styles.plashka}></View>
     {/* 
     Добавить элемент плашка 
     Придумать имя для плашки
     */}
     <View style={styles.mainActivity}></View> 
     {/* 
     Добавить элемент Главные мероприятия 
     Изменить на свайпы мероприятий вправо/влево (Slick Slider(dots))
     */}
      <Text>{userType}</Text>
    </View>
    //Добавить афишу(уточнить поведение(скролл вниз, кнопка 'Ещё'))
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    //   fontFamily:
  },
  layer: {
    height: '100%',
    backgroundColor: '#ececec', //have to redact
    borderBottomRightRadius : 15,
    borderBottomLeftRadius: 15
  },
  plashka: {
    height: 90,
    backgroundColor: 'white', //have to redact
    borderBottomRightRadius : 15,
    borderBottomLeftRadius: 15
  },
  mainActivity: {
    marginTop: 8,
    marginBottom: 8,
    height: 290,
    backgroundColor: 'white', //have to redact
    borderRadius: 15
  },
});
