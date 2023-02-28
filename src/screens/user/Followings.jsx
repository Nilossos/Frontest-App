import {View, Text} from "react-native";
import Header from "../Header";
import { gStyle } from "../../../styles/style";

export default function Followings() {
    return (
        <View>
            <Header>
            <Text style={gStyle.title}>Подписки</Text>
            </Header>
        </View>
    )
}