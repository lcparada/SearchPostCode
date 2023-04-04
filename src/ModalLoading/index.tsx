import { SafeAreaView, Modal, View, ActivityIndicator } from "react-native";

type IProps = {
  isEnable: false;
};

export default function ModalLoading() {
  return (
    <SafeAreaView>
      <Modal></Modal>
    </SafeAreaView>
  );
}
