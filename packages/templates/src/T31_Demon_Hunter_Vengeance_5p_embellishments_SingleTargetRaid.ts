/* eslint-disable unicorn/filename-case -- Disabling because this needs to match simc. */
import { dedent } from "ts-dedent";

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const T31_Demon_Hunter_Vengeance_5p_embellishments_SingleTargetRaid = dedent` 
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
  talents=BUkAAAAAAAAAAAAAAAAAAAAAAAASiEJCJIJBhIlkQiWiEJSIJplk0kkWSQAAAAAJJA
  
  
  head=screaming_torchfiends_burning_scowl,id=207263,bonus_id=7187/6935/1520,gem_id=192919,ilevel=528
  neck=torc_of_passed_time,id=201759,bonus_id=9500/9498/9405/8782,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  shoulder=screaming_torchfiends_horned_memento,id=207261,bonus_id=7187/1520,ilevel=528
  back=screaming_torchfiends_shawl,id=207258,bonus_id=7187/1520,ilevel=528
  chest=screaming_torchfiends_binding,id=207266,bonus_id=7187/1520,enchant_id=6625,ilevel=528
  wrist=verdant_sanctuary_bands,id=210206,bonus_id=7187/6935/1520,gem_id=192919,ilevel=528
  hands=screaming_torchfiends_grasp,id=207264,bonus_id=7187/1520,ilevel=528
  waist=screaming_torchfiends_clasp,id=207260,bonus_id=7187/6935/1520,gem_id=192985,ilevel=528
  legs=screaming_torchfiends_blazewraps,id=207262,bonus_id=7187/1520,enchant=frosted_armor_kit_3,ilevel=528
  feet=screaming_torchfiends_clutches,id=207265,bonus_id=7187/1520,ilevel=528
  finger1=band_of_burning_thorns,id=207159,bonus_id=7187/6935/1520,gem_id=192922,enchant=devotion_of_critical_strike_3,ilevel=528
  finger2=signet_of_the_last_elder,id=207162,bonus_id=7187/6935/1520,gem_id=192922,enchant=devotion_of_critical_strike_3,ilevel=528
  trinket1=augury_of_the_primal_flame,id=208614,bonus_id=7187/1527,ilevel=528
  trinket2=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520,ilevel=528
  main_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant=sophic_devotion_3,ilevel=528
  off_hand=double_time,id=207991,bonus_id=6646/6536/1611,enchant=wafting_devotion_3
  
  profileset."Cowl / Elemental Lariat"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / Elemental Lariat"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  
  profileset."Cowl / Thorn"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / Thorn"+=feet=toxic_thorn_footwraps,id=193452,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Cowl / Slimy"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / Slimy"+=feet=slimy_expulsion_boots,id=193451,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Cowl / Colony"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / Colony"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Cowl / Sporecloak"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / Sporecloak"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Cowl / SAF (B)"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / SAF (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/9379/8960,ilevel=525
  
  profileset."Cowl / SAF (W)"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / SAF (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/9379/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Cowl / SAF (F)"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / SAF (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/9379/8960,ilevel=525
  
  profileset."Cowl / Toxic (B)"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / Toxic (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8797/8960,ilevel=525
  
  profileset."Cowl / Toxic (W)"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / Toxic (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8797/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Cowl / Toxic (F)"+=head=flaring_cowl,id=193494,bonus_id=9498/9500/9405/8780/8960,gem_id=192919,ilevel=525
  profileset."Cowl / Toxic (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/8797/8960,ilevel=525
  
  profileset."Elemental Lariat / Thorn"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  profileset."Elemental Lariat / Thorn"+=feet=toxic_thorn_footwraps,id=193452,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Elemental Lariat / Slimy"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  profileset."Elemental Lariat / Slimy"+=feet=slimy_expulsion_boots,id=193451,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Elemental Lariat / Colony"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  profileset."Elemental Lariat / Colony"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Elemental Lariat / Sporecloak"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  profileset."Elemental Lariat / Sporecloak"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Elemental Lariat / SAF (B)"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  profileset."Elemental Lariat / SAF (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/9379/8960,ilevel=525
  
  profileset."Elemental Lariat / SAF (W)"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  profileset."Elemental Lariat / SAF (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/9379/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Elemental Lariat / SAF (F)"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  profileset."Elemental Lariat / SAF (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/9379/8960,ilevel=525
  
  profileset."Elemental Lariat / Toxic (B)"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  profileset."Elemental Lariat / Toxic (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8797/8960,ilevel=525
  
  profileset."Elemental Lariat / Toxic (W)"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  profileset."Elemental Lariat / Toxic (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8797/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Elemental Lariat / Toxic (F)"+=neck=elemental_lariat,id=193001,bonus_id=9500/9498/9405/8782/8960,gem_id=192919/192919/192919,crafted_stats=36/32,ilevel=525
  profileset."Elemental Lariat / Toxic (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/8797/8960,ilevel=525
  
  profileset."Thorn / Colony"+=feet=toxic_thorn_footwraps,id=193452,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Thorn / Colony"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Thorn / Sporecloak"+=feet=toxic_thorn_footwraps,id=193452,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Thorn / Sporecloak"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Thorn / SAF (B)"+=feet=toxic_thorn_footwraps,id=193452,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Thorn / SAF (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/9379/8960,ilevel=525
  
  profileset."Thorn / SAF (W)"+=feet=toxic_thorn_footwraps,id=193452,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Thorn / SAF (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/9379/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Thorn / Toxic (B)"+=feet=toxic_thorn_footwraps,id=193452,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Thorn / Toxic (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8797/8960,ilevel=525
  
  profileset."Thorn / Toxic (W)"+=feet=toxic_thorn_footwraps,id=193452,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Thorn / Toxic (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8797/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Slimy / Colony"+=feet=slimy_expulsion_boots,id=193451,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Slimy / Colony"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Slimy / Sporecloak"+=feet=slimy_expulsion_boots,id=193451,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Slimy / Sporecloak"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Slimy / SAF (B)"+=feet=slimy_expulsion_boots,id=193451,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Slimy / SAF (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/9379/8960,ilevel=525
  
  profileset."Slimy / SAF (W)"+=feet=slimy_expulsion_boots,id=193451,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Slimy / SAF (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/9379/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Slimy / Toxic (B)"+=feet=slimy_expulsion_boots,id=193451,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Slimy / Toxic (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8797/8960,ilevel=525
  
  profileset."Slimy / Toxic (W)"+=feet=slimy_expulsion_boots,id=193451,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Slimy / Toxic (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8797/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Colony / Sporecloak"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Colony / Sporecloak"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  
  profileset."Colony / SAF (B)"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Colony / SAF (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/9379/8960,ilevel=525
  
  profileset."Colony / SAF (W)"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Colony / SAF (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/9379/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Colony / SAF (F)"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Colony / SAF (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/9379/8960,ilevel=525
  
  profileset."Colony / Toxic (B)"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Colony / Toxic (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8797/8960,ilevel=525
  
  profileset."Colony / Toxic (W)"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Colony / Toxic (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8797/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Colony / Toxic (F)"+=shoulder=spore_colony_shoulderguards,id=204706,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Colony / Toxic (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/8797/8960,ilevel=525
  
  profileset."Sporecloak / SAF (B)"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Sporecloak / SAF (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/9379/8960,ilevel=525
  
  profileset."Sporecloak / SAF (W)"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Sporecloak / SAF (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/9379/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Sporecloak / SAF (F)"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Sporecloak / SAF (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/9379/8960,ilevel=525
  
  profileset."Sporecloak / Toxic (B)"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Sporecloak / Toxic (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8797/8960,ilevel=525
  
  profileset."Sporecloak / Toxic (W)"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Sporecloak / Toxic (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8797/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Sporecloak / Toxic (F)"+=back=undulating_sporecloak,id=205025,bonus_id=9500/9498/9405/8960,ilevel=525
  profileset."Sporecloak / Toxic (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/8797/8960,ilevel=525
  
  profileset."SAF (B) / SAF (W)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/9379/8960,ilevel=525
  profileset."SAF (B) / SAF (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/9379/8780/8960,gem_id=192985,ilevel=525
  
  profileset."SAF (B) / SAF (F)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/9379/8960,ilevel=525
  profileset."SAF (B) / SAF (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/9379/8960,ilevel=525
  
  profileset."SAF (B) / Toxic (W)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/9379/8960,ilevel=525
  profileset."SAF (B) / Toxic (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8797/8780/8960,gem_id=192985,ilevel=525
  
  profileset."SAF (B) / Toxic (F)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/9379/8960,ilevel=525
  profileset."SAF (B) / Toxic (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/8797/8960,ilevel=525
  
  profileset."SAF (W) / SAF (F)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/9379/8780/8960,gem_id=192985,ilevel=525
  profileset."SAF (W) / SAF (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/9379/8960,ilevel=525
  
  profileset."SAF (W) / Toxic (B)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/9379/8780/8960,gem_id=192985,ilevel=525
  profileset."SAF (W) / Toxic (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8797/8960,ilevel=525
  
  profileset."SAF (W) / Toxic (F)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/9379/8780/8960,gem_id=192985,ilevel=525
  profileset."SAF (W) / Toxic (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/8797/8960,ilevel=525
  
  profileset."SAF (F) / Toxic (B)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/9379/8960,ilevel=525
  profileset."SAF (F) / Toxic (B)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8797/8960,ilevel=525
  
  profileset."SAF (F) / Toxic (W)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/9379/8960,ilevel=525
  profileset."SAF (F) / Toxic (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8797/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Toxic (B) / Toxic (W)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8797/8960,ilevel=525
  profileset."Toxic (B) / Toxic (W)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8797/8780/8960,gem_id=192985,ilevel=525
  
  profileset."Toxic (B) / Toxic (F)"+=wrist=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8797/8960,ilevel=525
  profileset."Toxic (B) / Toxic (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/8797/8960,ilevel=525
  
  profileset."Toxic (W) / Toxic (F)"+=waist=lifebound_belt,id=193407,bonus_id=9498/9500/9405/8797/8780/8960,gem_id=192985,ilevel=525
  profileset."Toxic (W) / Toxic (F)"+=feet=lifebound_boots,id=193398,bonus_id=9498/9500/9405/8797/8960,ilevel=525
  `;
