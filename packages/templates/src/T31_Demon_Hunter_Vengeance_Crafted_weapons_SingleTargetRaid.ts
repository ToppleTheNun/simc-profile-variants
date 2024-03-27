/* eslint-disable unicorn/filename-case -- Disabling because this needs to match simc. */
import { dedent } from "ts-dedent";

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const T31_Demon_Hunter_Vengeance_Crafted_weapons_SingleTargetRaid = dedent` 
  iterations=10000
  desired_targets=1
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
  
   
  demonhunter="T31_Demon_Hunter_Vengeance_Crafted"
  spec=vengeance
  level=70
  race=night_elf
  timeofday=day
  role=tank
  position=front
  talents=BUkAAAAAAAAAAAAAAAAAAAAAAAASiEJCJIJBhIlkQiWiEJSIJplk0kkWSQAAAAAJJA
  
  head=lifebound_cap,id=193400,bonus_id=9498/9500/9405/8780,gem_id=192919,ilevel=525
  neck=torc_of_passed_time,id=201759,bonus_id=9500/9498/9405/8782,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  shoulders=lifebound_shoulderpads,id=193406,bonus_id=9498/9500/9405,ilevel=525
  back=screaming_torchfiends_shawl,id=207258,bonus_id=7187/1520,ilevel=525
  chest=lifebound_chestpiece,id=193399,bonus_id=9498/9500/9405,enchant_id=6625,ilevel=525
  wrists=lifebound_bindings,id=193419,bonus_id=9498/9500/9405/870,gem_id=192919,ilevel=525
  hands=lifebound_gloves,id=193418,bonus_id=9498/9500/9405,ilevel=525
  waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8780,gem_id=192985,ilevel=525
  legs=lifebound_trousers,id=193408,bonus_id=9498/9500/9405,enchant=frosted_armor_kit_3,ilevel=525
  feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405,ilevel=525
  finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  trinket1=alacritous_alchemist_stone,id=191492,bonus_id=9498/9500/9405,ilevel=525
  trinket2=idol_of_the_lifebinder,id=193003,bonus_id=9498/9500/9405,ilevel=525
  main_hand=primal_molten_warglaive,id=190508,bonus_id=9498/9500/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=525
  off_hand=primal_molten_warglaive,id=190508,bonus_id=9498/9500/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=525
  
  profileset."Thorncaller (Sophic) / Gholak (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Thorncaller (Sophic) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Thorncaller (Sophic) / Gholak (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Thorncaller (Sophic) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Thorncaller (Sophic) / Stormslash (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Thorncaller (Sophic) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Thorncaller (Sophic) / Stormslash (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Thorncaller (Sophic) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Thorncaller (Sophic) / Crafted (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Thorncaller (Sophic) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Thorncaller (Sophic) / Crafted (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Thorncaller (Sophic) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Thorncaller (Wafting) / Gholak (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Thorncaller (Wafting) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Thorncaller (Wafting) / Gholak (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Thorncaller (Wafting) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Thorncaller (Wafting) / Stormslash (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Thorncaller (Wafting) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Thorncaller (Wafting) / Stormslash (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Thorncaller (Wafting) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Thorncaller (Wafting) / Crafted (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Thorncaller (Wafting) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Thorncaller (Wafting) / Crafted (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Thorncaller (Wafting) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Gholak (Sophic) / Thorncaller (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Gholak (Sophic) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Gholak (Sophic) / Thorncaller (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Gholak (Sophic) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Gholak (Sophic) / Stormslash (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Gholak (Sophic) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Gholak (Sophic) / Stormslash (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Gholak (Sophic) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Gholak (Sophic) / Crafted (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Gholak (Sophic) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Gholak (Sophic) / Crafted (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  profileset."Gholak (Sophic) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Gholak (Wafting) / Thorncaller (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Gholak (Wafting) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Gholak (Wafting) / Thorncaller (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Gholak (Wafting) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Gholak (Wafting) / Stormslash (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Gholak (Wafting) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Gholak (Wafting) / Stormslash (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Gholak (Wafting) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Gholak (Wafting) / Crafted (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Gholak (Wafting) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Gholak (Wafting) / Crafted (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  profileset."Gholak (Wafting) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Stormslash (Sophic) / Thorncaller (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  profileset."Stormslash (Sophic) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Stormslash (Sophic) / Thorncaller (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  profileset."Stormslash (Sophic) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Stormslash (Sophic) / Gholak (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  profileset."Stormslash (Sophic) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Stormslash (Sophic) / Gholak (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  profileset."Stormslash (Sophic) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Stormslash (Sophic) / Stormslash (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  profileset."Stormslash (Sophic) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Stormslash (Sophic) / Stormslash (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  profileset."Stormslash (Sophic) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Stormslash (Sophic) / Crafted (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  profileset."Stormslash (Sophic) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Stormslash (Sophic) / Crafted (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  profileset."Stormslash (Sophic) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Stormslash (Wafting) / Thorncaller (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  profileset."Stormslash (Wafting) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Stormslash (Wafting) / Thorncaller (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  profileset."Stormslash (Wafting) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Stormslash (Wafting) / Gholak (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  profileset."Stormslash (Wafting) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Stormslash (Wafting) / Gholak (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  profileset."Stormslash (Wafting) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Stormslash (Wafting) / Stormslash (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  profileset."Stormslash (Wafting) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Stormslash (Wafting) / Stormslash (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  profileset."Stormslash (Wafting) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Stormslash (Wafting) / Crafted (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  profileset."Stormslash (Wafting) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Stormslash (Wafting) / Crafted (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  profileset."Stormslash (Wafting) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Crafted (Sophic) / Thorncaller (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Sophic) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Crafted (Sophic) / Thorncaller (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Sophic) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Crafted (Sophic) / Gholak (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Sophic) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Crafted (Sophic) / Gholak (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Sophic) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Crafted (Sophic) / Stormslash (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Sophic) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Crafted (Sophic) / Stormslash (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Sophic) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Crafted (Sophic) / Crafted (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Sophic) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Crafted (Sophic) / Crafted (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Sophic) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Crafted (Wafting) / Thorncaller (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Wafting) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Crafted (Wafting) / Thorncaller (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Wafting) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Crafted (Wafting) / Gholak (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Wafting) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Crafted (Wafting) / Gholak (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Wafting) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=7187/1520,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Crafted (Wafting) / Stormslash (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Wafting) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=sophic_devotion_3,ilevel=528
  
  profileset."Crafted (Wafting) / Stormslash (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Wafting) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=6646/6536/1611,enchant=wafting_devotion_3,ilevel=528
  
  profileset."Crafted (Wafting) / Crafted (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Wafting) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  
  profileset."Crafted (Wafting) / Crafted (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  profileset."Crafted (Wafting) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=9500/9498/9405,enchant=sophic_devotion_3,crafted_stats=36/32,ilevel=528
  `;
