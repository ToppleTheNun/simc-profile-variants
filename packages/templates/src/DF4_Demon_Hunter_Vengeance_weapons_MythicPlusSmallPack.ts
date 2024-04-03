/* eslint-disable unicorn/filename-case -- Disabling because this needs to match simc. */
import { dedent } from "ts-dedent";

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const DF4_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack = dedent` 
  ptr=1
  
  iterations=10000
  desired_targets=6
  max_time=40
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
  talents=BUkAAAAAAAAAAAAAAAAAAAAAAAAiIJJCJIJBhIlkQiWiEJSIJpkk0iESQAAAAAJJB
  
  
  head=screaming_torchfiends_burning_scowl,id=217228,bonus_id=10359/1491/6935,gem_id=192919,enchant=incandescent_essence
  neck=amulet_of_eonars_chosen,id=208445,bonus_id=10359/1491/8782,gem_id=192919/192919/192919
  shoulders=screaming_torchfiends_horned_memento,id=217230,bonus_id=10359/1491
  back=voice_of_the_silent_star,id=204465,bonus_id=10359/1498/10884
  chest=screaming_torchfiends_binding,id=217226,bonus_id=10359/1491,enchant_id=6625
  wrists=verdant_sanctuary_bands,id=210206,bonus_id=10359/1491/6935,gem_id=192919
  hands=screaming_torchfiends_grasp,id=217227,bonus_id=10359/1491
  waist=cinch_of_forgotten_duty,id=193636,bonus_id=10359/1491/6935,gem_id=192985
  legs=screaming_torchfiends_blazewraps,id=217229,bonus_id=10359/1491,enchant=frosted_armor_kit_3
  feet=iceclimbers_cleats,id=195509,bonus_id=10359/1491
  finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  trinket1=augury_of_the_primal_flame,id=208614,bonus_id=10359/1491
  trinket2=cataclysmic_signet_brand,id=207166,bonus_id=10359/1491
  main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Thorncaller (Sophic) / Gholak (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (Sophic) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Thorncaller (Sophic) / Gholak (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (Sophic) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Thorncaller (Sophic) / Stormslash (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (Sophic) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Thorncaller (Sophic) / Stormslash (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (Sophic) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Thorncaller (Sophic) / Crafted (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (Sophic) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Thorncaller (Sophic) / Crafted (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (Sophic) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Thorncaller (Sophic) / Double Time (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (Sophic) / Double Time (Sophic)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Thorncaller (Sophic) / Double Time (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (Sophic) / Double Time (Wafting)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Thorncaller (Wafting) / Gholak (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (Wafting) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Thorncaller (Wafting) / Gholak (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (Wafting) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Thorncaller (Wafting) / Stormslash (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (Wafting) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Thorncaller (Wafting) / Stormslash (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (Wafting) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Thorncaller (Wafting) / Crafted (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (Wafting) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Thorncaller (Wafting) / Crafted (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (Wafting) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Thorncaller (Wafting) / Double Time (Sophic)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (Wafting) / Double Time (Sophic)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Thorncaller (Wafting) / Double Time (Wafting)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (Wafting) / Double Time (Wafting)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Gholak (Sophic) / Thorncaller (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (Sophic) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Gholak (Sophic) / Thorncaller (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (Sophic) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Gholak (Sophic) / Stormslash (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (Sophic) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Gholak (Sophic) / Stormslash (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (Sophic) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Gholak (Sophic) / Crafted (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (Sophic) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Gholak (Sophic) / Crafted (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (Sophic) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Gholak (Sophic) / Double Time (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (Sophic) / Double Time (Sophic)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Gholak (Sophic) / Double Time (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (Sophic) / Double Time (Wafting)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Gholak (Wafting) / Thorncaller (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (Wafting) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Gholak (Wafting) / Thorncaller (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (Wafting) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Gholak (Wafting) / Stormslash (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (Wafting) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Gholak (Wafting) / Stormslash (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (Wafting) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Gholak (Wafting) / Crafted (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (Wafting) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Gholak (Wafting) / Crafted (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (Wafting) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Gholak (Wafting) / Double Time (Sophic)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (Wafting) / Double Time (Sophic)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Gholak (Wafting) / Double Time (Wafting)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (Wafting) / Double Time (Wafting)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Stormslash (Sophic) / Thorncaller (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (Sophic) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (Sophic) / Thorncaller (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (Sophic) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (Sophic) / Gholak (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (Sophic) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (Sophic) / Gholak (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (Sophic) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (Sophic) / Stormslash (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (Sophic) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (Sophic) / Stormslash (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (Sophic) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (Sophic) / Crafted (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (Sophic) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Stormslash (Sophic) / Crafted (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (Sophic) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Stormslash (Sophic) / Double Time (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (Sophic) / Double Time (Sophic)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Stormslash (Sophic) / Double Time (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (Sophic) / Double Time (Wafting)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Stormslash (Wafting) / Thorncaller (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (Wafting) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (Wafting) / Thorncaller (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (Wafting) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (Wafting) / Gholak (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (Wafting) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (Wafting) / Gholak (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (Wafting) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (Wafting) / Stormslash (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (Wafting) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (Wafting) / Stormslash (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (Wafting) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (Wafting) / Crafted (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (Wafting) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Stormslash (Wafting) / Crafted (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (Wafting) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Stormslash (Wafting) / Double Time (Sophic)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (Wafting) / Double Time (Sophic)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Stormslash (Wafting) / Double Time (Wafting)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (Wafting) / Double Time (Wafting)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Crafted (Sophic) / Thorncaller (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Sophic) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (Sophic) / Thorncaller (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Sophic) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (Sophic) / Gholak (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Sophic) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (Sophic) / Gholak (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Sophic) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (Sophic) / Stormslash (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Sophic) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (Sophic) / Stormslash (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Sophic) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (Sophic) / Crafted (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Sophic) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Crafted (Sophic) / Crafted (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Sophic) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Crafted (Sophic) / Double Time (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Sophic) / Double Time (Sophic)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Crafted (Sophic) / Double Time (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Sophic) / Double Time (Wafting)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Crafted (Wafting) / Thorncaller (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Wafting) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (Wafting) / Thorncaller (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Wafting) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (Wafting) / Gholak (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Wafting) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (Wafting) / Gholak (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Wafting) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (Wafting) / Stormslash (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Wafting) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (Wafting) / Stormslash (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Wafting) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (Wafting) / Crafted (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Wafting) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Crafted (Wafting) / Crafted (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Wafting) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Crafted (Wafting) / Double Time (Sophic)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Wafting) / Double Time (Sophic)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Crafted (Wafting) / Double Time (Wafting)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  profileset."Crafted (Wafting) / Double Time (Wafting)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Double Time (Sophic) / Thorncaller (Sophic)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (Sophic) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (Sophic) / Thorncaller (Wafting)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (Sophic) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (Sophic) / Gholak (Sophic)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (Sophic) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (Sophic) / Gholak (Wafting)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (Sophic) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (Sophic) / Stormslash (Sophic)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (Sophic) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (Sophic) / Stormslash (Wafting)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (Sophic) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (Sophic) / Crafted (Sophic)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (Sophic) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Double Time (Sophic) / Crafted (Wafting)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (Sophic) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Double Time (Sophic) / Double Time (Sophic)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (Sophic) / Double Time (Sophic)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Double Time (Sophic) / Double Time (Wafting)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (Sophic) / Double Time (Wafting)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Double Time (Wafting) / Thorncaller (Sophic)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (Wafting) / Thorncaller (Sophic)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (Wafting) / Thorncaller (Wafting)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (Wafting) / Thorncaller (Wafting)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (Wafting) / Gholak (Sophic)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (Wafting) / Gholak (Sophic)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (Wafting) / Gholak (Wafting)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (Wafting) / Gholak (Wafting)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (Wafting) / Stormslash (Sophic)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (Wafting) / Stormslash (Sophic)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (Wafting) / Stormslash (Wafting)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (Wafting) / Stormslash (Wafting)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (Wafting) / Crafted (Sophic)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (Wafting) / Crafted (Sophic)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Double Time (Wafting) / Crafted (Wafting)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (Wafting) / Crafted (Wafting)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,enchant=sophic_devotion_3,crafted_stats=36/32
  
  profileset."Double Time (Wafting) / Double Time (Sophic)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (Wafting) / Double Time (Sophic)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Double Time (Wafting) / Double Time (Wafting)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (Wafting) / Double Time (Wafting)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  `;
