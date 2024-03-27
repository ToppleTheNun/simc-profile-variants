/* eslint-disable unicorn/filename-case -- Disabling because this needs to match simc. */
import { dedent } from "ts-dedent";

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const T31_Demon_Hunter_Vengeance_weapons_SingleTargetRaid = dedent` 
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
  
   
  demonhunter="T31_Demon_Hunter_Vengeance"
  spec=vengeance
  level=70
  race=night_elf
  timeofday=day
  role=tank
  position=front
  talents=BUkAAAAAAAAAAAAAAAAAAAAAAAAiIJJCJIJBhIlkQiWiEJSIJpkk0iESQAAAAAJJB
  
  
  head=screaming_torchfiends_burning_scowl,id=207263,bonus_id=7187/6935/1520,gem_id=192919,enchant=incandescent_essence
  neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32
  shoulders=screaming_torchfiends_horned_memento,id=207261,bonus_id=7187/1520
  back=cloak_of_fading_echoes,id=134405,bonus_id=9499/7981/5868/657
  chest=screaming_torchfiends_binding,id=207266,bonus_id=7187/1520,enchant_id=6625
  wrists=verdant_sanctuary_bands,id=210206,bonus_id=7187/6935/1520,gem_id=192919
  hands=screaming_torchfiends_grasp,id=207264,bonus_id=7187/1520
  waist=belt_of_the_eternal_struggle,id=207874,bonus_id=9576/6935/1582,gem_id=192985
  legs=galakronds_voracious_hide,id=207820,bonus_id=9576/1579,enchant=frosted_armor_kit_3
  feet=slimy_expulsion_boots,id=193451,bonus_id=9500/9498/9405/8960
  finger1=band_of_burning_thorns,id=207159,bonus_id=7187/6935/1520,gem_id=192922,enchant=devotion_of_critical_strike_3
  finger2=signet_of_the_last_elder,id=207162,bonus_id=7187/6935/1520,gem_id=192922,enchant=devotion_of_critical_strike_3
  trinket1=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527
  trinket2=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520
  main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3
  off_hand=double_time,id=207991,bonus_id=9576/1611,enchant=wafting_devotion_3
  
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
