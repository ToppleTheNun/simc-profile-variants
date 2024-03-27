/* eslint-disable unicorn/filename-case -- Disabling because this needs to match simc. */
import { dedent } from "ts-dedent";

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const DF4_Demon_Hunter_Vengeance_trinkets_CouncilRaid = dedent` 
  iterations=10000
  desired_targets=4
  max_time=300
  calculate_scale_factors=0
  scale_only=strength,intellect,agility,crit,mastery,vers,haste,weapon_dps,weapon_offhand_dps
  override.bloodlust=1
  override.arcane_intellect=1
  override.power_word_fortitude=1
  override.battle_shout=1
  override.mystic_touch=1
  override.chaos_brand=1
  override.windfury_totem=1
  override.mark_of_the_wild=1
  override.bleeding=1
  report_details=1
  single_actor_batch=1
  optimize_expressions=1
  target_error=0.05
  
   
  demonhunter="DF4_Demon_Hunter_Vengeance"
  spec=vengeance
  level=70
  race=night_elf
  timeofday=day
  role=tank
  position=front
  talents=BUkAAAAAAAAAAAAAAAAAAAAAAAASiEJCJIJBhIlkQiWiEJSIJplk0kkWSQAAAAAJJA
  
  
  head=screaming_torchfiends_burning_scowl,id=207263,bonus_id=7187/6935/1520,gem_id=192919,enchant=incandescent_essence,ilevel=528
  neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  shoulders=screaming_torchfiends_horned_memento,id=207261,bonus_id=7187/1520,ilevel=528
  back=cloak_of_fading_echoes,id=134405,bonus_id=9499/7981/5868/657,ilevel=528
  chest=screaming_torchfiends_binding,id=207266,bonus_id=7187/1520,enchant_id=6625,ilevel=528
  wrists=verdant_sanctuary_bands,id=210206,bonus_id=7187/6935/1520,gem_id=192919,ilevel=528
  hands=screaming_torchfiends_grasp,id=207264,bonus_id=7187/1520,ilevel=528
  waist=belt_of_the_eternal_struggle,id=207874,bonus_id=9576/6935/1582,gem_id=192985,ilevel=528
  legs=screaming_torchfiends_blazewraps,id=207262,bonus_id=7187/1520,enchant=frosted_armor_kit_3,ilevel=528
  feet=slimy_expulsion_boots,id=193451,bonus_id=9500/9498/9405/8960,ilevel=525
  finger1=band_of_burning_thorns,id=207159,bonus_id=7187/6935/1520,gem_id=192922,enchant=devotion_of_critical_strike_3,ilevel=528
  finger2=signet_of_the_last_elder,id=207162,bonus_id=7187/6935/1520,gem_id=192922,enchant=devotion_of_critical_strike_3,ilevel=528
  trinket1=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  trinket2=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  off_hand=stormslash,id=193688,bonus_id=9576/1611,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Bandolier / Ashes"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Ashes"+=trinket2=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  
  profileset."Bandolier / Badge"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Badge"+=trinket2=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  
  profileset."Bandolier / Gift"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Gift"+=trinket2=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  
  profileset."Bandolier / Rageheart"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Rageheart"+=trinket2=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  
  profileset."Bandolier / Signet"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Signet"+=trinket2=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  
  profileset."Bandolier / Idol"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Idol"+=trinket2=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  
  profileset."Bandolier / Augury"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Augury"+=trinket2=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  
  profileset."Bandolier / Boon"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Boon"+=trinket2=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  
  profileset."Bandolier / Grieftorch"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Grieftorch"+=trinket2=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  
  profileset."Bandolier / Call"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Call"+=trinket2=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Bandolier / Beacon"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Bandolier / Spiteful"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Bandolier / All-totem"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Bandolier / Anvil"+=trinket1=bandolier_of_twisted_blades,id=207165,bonus_id=7187/1520,ilevel=528
  profileset."Bandolier / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Ashes / Badge"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Badge"+=trinket2=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  
  profileset."Ashes / Gift"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Gift"+=trinket2=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  
  profileset."Ashes / Rageheart"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Rageheart"+=trinket2=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  
  profileset."Ashes / Signet"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Signet"+=trinket2=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  
  profileset."Ashes / Idol"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Idol"+=trinket2=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  
  profileset."Ashes / Augury"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Augury"+=trinket2=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  
  profileset."Ashes / Boon"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Boon"+=trinket2=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  
  profileset."Ashes / Grieftorch"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Grieftorch"+=trinket2=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  
  profileset."Ashes / Call"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Call"+=trinket2=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Ashes / Beacon"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Ashes / Spiteful"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Ashes / All-totem"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Ashes / Anvil"+=trinket1=ashes_of_the_embersoul,id=207167,bonus_id=7187/1520,ilevel=528
  profileset."Ashes / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Badge / Gift"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Gift"+=trinket2=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  
  profileset."Badge / Rageheart"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Rageheart"+=trinket2=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  
  profileset."Badge / Signet"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Signet"+=trinket2=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  
  profileset."Badge / Idol"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Idol"+=trinket2=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  
  profileset."Badge / Augury"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Augury"+=trinket2=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  
  profileset."Badge / Boon"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Boon"+=trinket2=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  
  profileset."Badge / Grieftorch"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Grieftorch"+=trinket2=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  
  profileset."Badge / Call"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Call"+=trinket2=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Badge / Beacon"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Badge / Spiteful"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Badge / All-totem"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Badge / Anvil"+=trinket1=pips_emerald_friendship_badge,id=207168,bonus_id=7187/1520,ilevel=528
  profileset."Badge / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Gift / Rageheart"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / Rageheart"+=trinket2=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  
  profileset."Gift / Signet"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / Signet"+=trinket2=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  
  profileset."Gift / Idol"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / Idol"+=trinket2=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  
  profileset."Gift / Augury"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / Augury"+=trinket2=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  
  profileset."Gift / Boon"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / Boon"+=trinket2=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  
  profileset."Gift / Grieftorch"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / Grieftorch"+=trinket2=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  
  profileset."Gift / Call"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / Call"+=trinket2=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Gift / Beacon"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Gift / Spiteful"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Gift / All-totem"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Gift / Anvil"+=trinket1=gift_of_ursine_vengeance,id=207173,bonus_id=7187/1520,ilevel=528
  profileset."Gift / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Rageheart / Signet"+=trinket1=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  profileset."Rageheart / Signet"+=trinket2=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  
  profileset."Rageheart / Idol"+=trinket1=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  profileset."Rageheart / Idol"+=trinket2=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  
  profileset."Rageheart / Augury"+=trinket1=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  profileset."Rageheart / Augury"+=trinket2=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  
  profileset."Rageheart / Boon"+=trinket1=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  profileset."Rageheart / Boon"+=trinket2=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  
  profileset."Rageheart / Grieftorch"+=trinket1=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  profileset."Rageheart / Grieftorch"+=trinket2=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  
  profileset."Rageheart / Call"+=trinket1=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  profileset."Rageheart / Call"+=trinket2=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Rageheart / Beacon"+=trinket1=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  profileset."Rageheart / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Rageheart / Spiteful"+=trinket1=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  profileset."Rageheart / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Rageheart / All-totem"+=trinket1=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  profileset."Rageheart / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Rageheart / Anvil"+=trinket1=fyrakks_tainted_rageheart,id=207174,bonus_id=7187/1520,ilevel=528
  profileset."Rageheart / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Signet / Idol"+=trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  profileset."Signet / Idol"+=trinket2=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  
  profileset."Signet / Augury"+=trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  profileset."Signet / Augury"+=trinket2=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  
  profileset."Signet / Boon"+=trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  profileset."Signet / Boon"+=trinket2=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  
  profileset."Signet / Grieftorch"+=trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  profileset."Signet / Grieftorch"+=trinket2=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  
  profileset."Signet / Call"+=trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  profileset."Signet / Call"+=trinket2=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Signet / Beacon"+=trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  profileset."Signet / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Signet / Spiteful"+=trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  profileset."Signet / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Signet / All-totem"+=trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  profileset."Signet / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Signet / Anvil"+=trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  profileset."Signet / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Idol / Augury"+=trinket1=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  profileset."Idol / Augury"+=trinket2=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  
  profileset."Idol / Boon"+=trinket1=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  profileset."Idol / Boon"+=trinket2=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  
  profileset."Idol / Grieftorch"+=trinket1=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  profileset."Idol / Grieftorch"+=trinket2=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  
  profileset."Idol / Call"+=trinket1=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  profileset."Idol / Call"+=trinket2=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Idol / Beacon"+=trinket1=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  profileset."Idol / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Idol / Spiteful"+=trinket1=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  profileset."Idol / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Idol / All-totem"+=trinket1=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  profileset."Idol / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Idol / Anvil"+=trinket1=coiled_serpent_idol,id=207175,bonus_id=7187/1520,ilevel=528
  profileset."Idol / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Augury / Boon"+=trinket1=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  profileset."Augury / Boon"+=trinket2=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  
  profileset."Augury / Grieftorch"+=trinket1=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  profileset."Augury / Grieftorch"+=trinket2=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  
  profileset."Augury / Call"+=trinket1=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  profileset."Augury / Call"+=trinket2=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Augury / Beacon"+=trinket1=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  profileset."Augury / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Augury / Spiteful"+=trinket1=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  profileset."Augury / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Augury / All-totem"+=trinket1=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  profileset."Augury / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Augury / Anvil"+=trinket1=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  profileset."Augury / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Boon / Grieftorch"+=trinket1=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  profileset."Boon / Grieftorch"+=trinket2=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  
  profileset."Boon / Call"+=trinket1=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  profileset."Boon / Call"+=trinket2=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Boon / Beacon"+=trinket1=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  profileset."Boon / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Boon / Spiteful"+=trinket1=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  profileset."Boon / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Boon / All-totem"+=trinket1=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  profileset."Boon / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Boon / Anvil"+=trinket1=stormeaters_boon,id=194302,bonus_id=6652/7981/1498/8767,ilevel=528
  profileset."Boon / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Grieftorch / Call"+=trinket1=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  profileset."Grieftorch / Call"+=trinket2=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Grieftorch / Beacon"+=trinket1=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  profileset."Grieftorch / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Grieftorch / Anvil"+=trinket1=manic_grieftorch,id=194308,bonus_id=7981/6652/1498/8767,ilevel=528
  profileset."Grieftorch / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Call / Beacon"+=trinket1=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  profileset."Call / Beacon"+=trinket2=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Call / Spiteful"+=trinket1=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  profileset."Call / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Call / All-totem"+=trinket1=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  profileset."Call / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Call / Anvil"+=trinket1=neltharions_call_to_chaos,id=204201,bonus_id=4800/4786/1498,ilevel=528
  profileset."Call / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Beacon / Spiteful"+=trinket1=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  profileset."Beacon / Spiteful"+=trinket2=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Beacon / All-totem"+=trinket1=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  profileset."Beacon / All-totem"+=trinket2=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Beacon / Anvil"+=trinket1=beacon_to_the_beyond,id=203963,bonus_id=4800/4786/1498,ilevel=528
  profileset."Beacon / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."Spiteful / Anvil"+=trinket1=spiteful_storm,id=194309,bonus_id=4800/4786/1498,ilevel=528
  profileset."Spiteful / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  
  profileset."All-totem / Anvil"+=trinket1=,id=194306,bonus_id=4800/4786/1498,ilevel=528
  profileset."All-totem / Anvil"+=trinket2=,id=202617,bonus_id=4800/4786/1498,ilevel=528
  `;
