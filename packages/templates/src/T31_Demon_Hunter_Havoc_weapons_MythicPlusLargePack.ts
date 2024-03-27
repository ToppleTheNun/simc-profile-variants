import { dedent } from "ts-dedent";

export const T31_Demon_Hunter_Havoc_weapons_MythicPlusLargePack = dedent` 
  iterations=10000
  desired_targets=10
  max_time=60
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
  
   
  demonhunter="T31_Demon_Hunter_Havoc"
  spec=havoc
  level=70
  race=night_elf
  timeofday=day
  role=attack
  position=back
  talents=BEkAAAAAAAAAAAAAAAAAAAAAAIJRkkgkkIJhkkAAAAAAASLEJEJtkkWaREIho0ikEB
  
  head=screaming_torchfiends_burning_scowl,id=207263,bonus_id=7187/1520/8780,gem_id=192982,enchant_id=7052
  neck=chain_of_the_green_flight,id=137311,bonus_id=3326/1514/6536/6646/8782,gem_id=192922/192922/192922
  shoulders=screaming_torchfiends_horned_memento,id=207261,bonus_id=7187/1520
  back=raals_bib,id=159294,bonus_id=3316/1515/6646
  chest=screaming_torchfiends_binding,id=207266,bonus_id=7187/1520,enchant_id=6625
  wrists=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8960/8797/8780,ilevel=486,gem_id=192922,enchant_id=6574,crafted_stats=49/36
  hands=screaming_torchfiends_grasp,id=207264,bonus_id=7187/1520
  waist=bloody_dragonhide_belt,id=207131,bonus_id=7187/1520/8780,gem_id=192922,enchant_id=6904
  legs=screaming_torchfiends_blazewraps,id=207262,bonus_id=7187/1520,enchant_id=6490
  feet=toxic_thorn_footwraps,id=193452,bonus_id=9500/9498/9405/8960
  finger1=band_of_twisted_bark,id=134531,bonus_id=3326/1514/6536/6646/8780,ilevel=489,gem_id=192922,enchant_id=6550
  finger2=daydreamers_glimmering_ring,id=208442,bonus_id=7187/1520/8780,ilevel=489,gem_id=192922,enchant_id=6550
  trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520
  trinket2=witherbarks_branch,id=109999,bonus_id=9888
  main_hand=double_time,id=207991,bonus_id=6536/1611/6646,enchant_id=6655
  off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant_id=6655
  
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
