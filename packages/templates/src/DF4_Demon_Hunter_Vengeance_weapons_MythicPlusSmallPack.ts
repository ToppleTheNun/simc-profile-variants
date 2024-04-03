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
  
  profileset."Thorncaller (SD3) / Gholak (SD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (SD3) / Gholak (SD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Thorncaller (SD3) / Gholak (WD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (SD3) / Gholak (WD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Thorncaller (SD3) / Stormslash (SD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (SD3) / Stormslash (SD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Thorncaller (SD3) / Stormslash (WD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (SD3) / Stormslash (WD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Thorncaller (SD3) / Crafted (SD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (SD3) / Crafted (SD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  
  profileset."Thorncaller (SD3) / Crafted (WD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (SD3) / Crafted (WD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  
  profileset."Thorncaller (SD3) / Double Time (SD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (SD3) / Double Time (SD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Thorncaller (SD3) / Double Time (WD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Thorncaller (SD3) / Double Time (WD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Thorncaller (WD3) / Gholak (SD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (WD3) / Gholak (SD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Thorncaller (WD3) / Gholak (WD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (WD3) / Gholak (WD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Thorncaller (WD3) / Stormslash (SD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (WD3) / Stormslash (SD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Thorncaller (WD3) / Stormslash (WD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (WD3) / Stormslash (WD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Thorncaller (WD3) / Crafted (SD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (WD3) / Crafted (SD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  
  profileset."Thorncaller (WD3) / Crafted (WD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (WD3) / Crafted (WD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  
  profileset."Thorncaller (WD3) / Double Time (SD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (WD3) / Double Time (SD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Thorncaller (WD3) / Double Time (WD3)"+=main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Thorncaller (WD3) / Double Time (WD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Gholak (SD3) / Thorncaller (SD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (SD3) / Thorncaller (SD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Gholak (SD3) / Thorncaller (WD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (SD3) / Thorncaller (WD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Gholak (SD3) / Stormslash (SD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (SD3) / Stormslash (SD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Gholak (SD3) / Stormslash (WD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (SD3) / Stormslash (WD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Gholak (SD3) / Crafted (SD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (SD3) / Crafted (SD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  
  profileset."Gholak (SD3) / Crafted (WD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (SD3) / Crafted (WD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  
  profileset."Gholak (SD3) / Double Time (SD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (SD3) / Double Time (SD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Gholak (SD3) / Double Time (WD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Gholak (SD3) / Double Time (WD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Gholak (WD3) / Thorncaller (SD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (WD3) / Thorncaller (SD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Gholak (WD3) / Thorncaller (WD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (WD3) / Thorncaller (WD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Gholak (WD3) / Stormslash (SD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (WD3) / Stormslash (SD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Gholak (WD3) / Stormslash (WD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (WD3) / Stormslash (WD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Gholak (WD3) / Crafted (SD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (WD3) / Crafted (SD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  
  profileset."Gholak (WD3) / Crafted (WD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (WD3) / Crafted (WD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  
  profileset."Gholak (WD3) / Double Time (SD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (WD3) / Double Time (SD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Gholak (WD3) / Double Time (WD3)"+=main_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Gholak (WD3) / Double Time (WD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Stormslash (SD3) / Thorncaller (SD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (SD3) / Thorncaller (SD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (SD3) / Thorncaller (WD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (SD3) / Thorncaller (WD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (SD3) / Gholak (SD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (SD3) / Gholak (SD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (SD3) / Gholak (WD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (SD3) / Gholak (WD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (SD3) / Stormslash (SD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (SD3) / Stormslash (SD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (SD3) / Stormslash (WD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (SD3) / Stormslash (WD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (SD3) / Crafted (SD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (SD3) / Crafted (SD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  
  profileset."Stormslash (SD3) / Crafted (WD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (SD3) / Crafted (WD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  
  profileset."Stormslash (SD3) / Double Time (SD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (SD3) / Double Time (SD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Stormslash (SD3) / Double Time (WD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  profileset."Stormslash (SD3) / Double Time (WD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Stormslash (WD3) / Thorncaller (SD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (WD3) / Thorncaller (SD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (WD3) / Thorncaller (WD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (WD3) / Thorncaller (WD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (WD3) / Gholak (SD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (WD3) / Gholak (SD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (WD3) / Gholak (WD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (WD3) / Gholak (WD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (WD3) / Stormslash (SD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (WD3) / Stormslash (SD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Stormslash (WD3) / Stormslash (WD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (WD3) / Stormslash (WD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Stormslash (WD3) / Crafted (SD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (WD3) / Crafted (SD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  
  profileset."Stormslash (WD3) / Crafted (WD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (WD3) / Crafted (WD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  
  profileset."Stormslash (WD3) / Double Time (SD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (WD3) / Double Time (SD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Stormslash (WD3) / Double Time (WD3)"+=main_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  profileset."Stormslash (WD3) / Double Time (WD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Crafted (SD3) / Thorncaller (SD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  profileset."Crafted (SD3) / Thorncaller (SD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (SD3) / Thorncaller (WD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  profileset."Crafted (SD3) / Thorncaller (WD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (SD3) / Gholak (SD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  profileset."Crafted (SD3) / Gholak (SD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (SD3) / Gholak (WD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  profileset."Crafted (SD3) / Gholak (WD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (SD3) / Stormslash (SD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  profileset."Crafted (SD3) / Stormslash (SD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (SD3) / Stormslash (WD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  profileset."Crafted (SD3) / Stormslash (WD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (SD3) / Crafted (SD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  profileset."Crafted (SD3) / Crafted (SD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  
  profileset."Crafted (SD3) / Crafted (WD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  profileset."Crafted (SD3) / Crafted (WD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  
  profileset."Crafted (SD3) / Double Time (SD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  profileset."Crafted (SD3) / Double Time (SD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Crafted (SD3) / Double Time (WD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  profileset."Crafted (SD3) / Double Time (WD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Crafted (WD3) / Thorncaller (SD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  profileset."Crafted (WD3) / Thorncaller (SD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (WD3) / Thorncaller (WD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  profileset."Crafted (WD3) / Thorncaller (WD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (WD3) / Gholak (SD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  profileset."Crafted (WD3) / Gholak (SD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (WD3) / Gholak (WD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  profileset."Crafted (WD3) / Gholak (WD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (WD3) / Stormslash (SD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  profileset."Crafted (WD3) / Stormslash (SD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Crafted (WD3) / Stormslash (WD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  profileset."Crafted (WD3) / Stormslash (WD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Crafted (WD3) / Crafted (SD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  profileset."Crafted (WD3) / Crafted (SD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  
  profileset."Crafted (WD3) / Crafted (WD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  profileset."Crafted (WD3) / Crafted (WD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  
  profileset."Crafted (WD3) / Double Time (SD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  profileset."Crafted (WD3) / Double Time (SD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Crafted (WD3) / Double Time (WD3)"+=main_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  profileset."Crafted (WD3) / Double Time (WD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Double Time (SD3) / Thorncaller (SD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (SD3) / Thorncaller (SD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (SD3) / Thorncaller (WD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (SD3) / Thorncaller (WD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (SD3) / Gholak (SD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (SD3) / Gholak (SD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (SD3) / Gholak (WD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (SD3) / Gholak (WD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (SD3) / Stormslash (SD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (SD3) / Stormslash (SD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (SD3) / Stormslash (WD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (SD3) / Stormslash (WD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (SD3) / Crafted (SD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (SD3) / Crafted (SD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  
  profileset."Double Time (SD3) / Crafted (WD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (SD3) / Crafted (WD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  
  profileset."Double Time (SD3) / Double Time (SD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (SD3) / Double Time (SD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Double Time (SD3) / Double Time (WD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  profileset."Double Time (SD3) / Double Time (WD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  
  profileset."Double Time (WD3) / Thorncaller (SD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (WD3) / Thorncaller (SD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (WD3) / Thorncaller (WD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (WD3) / Thorncaller (WD3)"+=off_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (WD3) / Gholak (SD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (WD3) / Gholak (SD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (WD3) / Gholak (WD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (WD3) / Gholak (WD3)"+=off_hand=gholak_the_final_conflagration,id=207786,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (WD3) / Stormslash (SD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (WD3) / Stormslash (SD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=sophic_devotion_3
  
  profileset."Double Time (WD3) / Stormslash (WD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (WD3) / Stormslash (WD3)"+=off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Double Time (WD3) / Crafted (SD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (WD3) / Crafted (SD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=sophic_devotion_3
  
  profileset."Double Time (WD3) / Crafted (WD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (WD3) / Crafted (WD3)"+=off_hand=primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32,enchant=wafting_devotion_3
  
  profileset."Double Time (WD3) / Double Time (SD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (WD3) / Double Time (SD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=sophic_devotion_3
  
  profileset."Double Time (WD3) / Double Time (WD3)"+=main_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  profileset."Double Time (WD3) / Double Time (WD3)"+=off_hand=double_time,id=207991,bonus_id=10359/1478,enchant=wafting_devotion_3
  `;
