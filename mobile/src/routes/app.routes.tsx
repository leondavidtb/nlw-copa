import { useTheme } from "native-base";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlusCircle, SoccerBall } from "phosphor-react-native";
import { New } from "../screens/New";
import { Pools } from "../screens/Pools";
import { Find } from "../screens/Find";

const { Navigator, Screen } = createBottomTabNavigator();
export function AppRoutes() {
  const { colors, sizes } = useTheme();

  const size = sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          position: "absolute",
          height: sizes[22],
          borderTopWidth: 0,
          backgroundColor: colors.gray[700],
        },
        tabBarItemStyle: {
          position: "relative",
          top: Platform.OS === "android" ? -10 : 0,
        },
      }}
    >
      <Screen
        name="new"
        component={New}
        options={{
          tabBarLabel: "Novo bolão",
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
        }}
      />
      <Screen
        name="pools"
        component={Pools}
        options={{
          tabBarLabel: "Meus bolões",
          tabBarIcon: ({ color }) => <SoccerBall color={color} size={size} />,
        }}
      />

      <Screen
        name="find"
        component={Find}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
