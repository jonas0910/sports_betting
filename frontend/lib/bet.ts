import { PostBet } from "@/types/bet";
import api from "./api";

export async function createBet(data: PostBet) {
  console.log("Creating bet with data:", data);
  const res = await api.post("/bets", data);
  return res.data;
}
