import { Rewards } from "../rewards";
import { LocationName } from "../types/LocationName";
import { RewardLocation, RewardLocationType } from "../types/RewardLocation";

export const portRoyalRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.PORT_ROYAL,
		description: "Rampart",
		value: "11CDFE3E",
		reward: Rewards.NAVAL_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Rampart",
		value: "11CDFE4A",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Rampart",
		value: "11CDFE56",
		reward: Rewards.DARK_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Town",
		value: "11CDFE62",
		reward: Rewards.DARK_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Town",
		value: "11CDFE6E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Town",
		value: "11CDFE7A",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Town",
		value: "11CDFE86",
		reward: Rewards.MYTHRIL_GEM,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Cave Mouth",
		value: "11CDFE92",
		reward: Rewards.BRIGHT_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Cave Mouth",
		value: "11CDFE9E",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Powder Store",
		value: "11CDFEAA",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Powder Store",
		value: "11CDFEB6",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Moonlight Nook",
		value: "11CDFEC2",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Moonlight Nook",
		value: "11CDFECE",
		reward: Rewards.SERENITY_GEM,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Moonlight Nook",
		value: "11CDFEDA",
		reward: Rewards.POWER_STONE,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.PORT_ROYAL,
		description: "The Interceptor's Hold",
		value: "11CDFEE6",
		reward: Rewards.FEATHER_CHARM,
		secondVisit: true,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Seadrift Keep",
		value: "11CDFEF2",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Seadrift Keep",
		value: "11CDFEFE",
		reward: Rewards.ORICHALCUM,
		secondVisit: true,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Seadrift Keep",
		value: "11CDFF0A",
		reward: Rewards.METEOR_STAFF,
		secondVisit: true,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Seadrift Row",
		value: "11CDFF16",
		reward: Rewards.SERENITY_GEM,
		secondVisit: true,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Seadrift Row",
		value: "11CDFF22",
		reward: Rewards.KING_RECIPE,
		secondVisit: true,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.PORT_ROYAL,
		description: "Seadrift Row",
		value: "11CDFF2E",
		reward: Rewards.MYTHRIL_CRYSTAL,
		secondVisit: true,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.PORT_ROYAL,
		description: "The Interceptor Medallion Fight",
		value: "21D110B8",
		reward: Rewards.AERIAL_SPIRAL,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.PORT_ROYAL,
		description: "Captain Barbossa",
		value: "21D10AA8",
		reward: Rewards.AERIAL_FINISH,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.PORT_ROYAL,
		description: "Grim Reaper 1",
		value: "21D11028",
		reward: Rewards.HORIZONTAL_SLASH,
		secondVisit: true,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.PORT_ROYAL,
		description: "Grim Reaper 2",
		value: "21D10AE8",
		reward: Rewards.MAGNET,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.PORT_ROYAL,
		description: "Isla de Muerta Map",
		value: "11CE077A",
		reward: Rewards.ISLA_DE_MUERTA_MAP,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.PORT_ROYAL,
		description: "Follow the Wind",
		value: "11CE0786",
		reward: Rewards.FOLLOW_THE_WIND,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.PORT_ROYAL,
		description: "Cursed Medallion",
		value: "11CE086A",
		reward: Rewards.CURSED_MEDALLION,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.PORT_ROYAL,
		description: "Ship Graveyard Map",
		value: "11CE0876",
		reward: Rewards.SHIP_GRAVEYARD_MAP,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.PORT_ROYAL,
		description: "Secret Ansem's Report 6 (Grim Reaper 2)",
		value: "11CE09DE",
		reward: Rewards.REPORT_SIX,
		secondVisit: true,
	},
];
