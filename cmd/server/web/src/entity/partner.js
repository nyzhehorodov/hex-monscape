import PokebattleHTTP from "../composables/http_client";
import { useStore } from "../store";

const additionalData = {
  Pikachu: {
    icon: "bytesize:lightning",
    color: "#F3D77B",
  },
  Charmander: {
    icon: "ant-design:fire-twotone",
    color: "#FF7A00",
  },
  Bulbasaur: {
    icon: "tabler:plant-2",
    color: "#7CB69D",
  },
};

export const getAvailablePartners = async () => {
  // request to server
  const client = new PokebattleHTTP();
  const res = await client.getAvailablePartners();
  // mutate the payload as application required
  let { partners } = res.data;

  partners = partners.map((p) => {
    p.icon = additionalData[p.name].icon;
    p.color = additionalData[p.name].color;

    return p;
  });

  return partners;
};

export const getChoosenPartners = () => {
  // check whether partner data already exist,
  // if not, just fetch from the server and match
  // partner ID from store to currently fetched partners
};
