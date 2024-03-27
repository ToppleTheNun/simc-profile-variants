import { dedent } from "ts-dedent";

export const DF4_Demon_Hunter_Vengeance_rings_MythicPlusLargePack = dedent` 
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
  
  profileset."Ring-bound / Titanic"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Ring-bound / Titanic"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  
  profileset."Ring-bound / Eggnog"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Ring-bound / Eggnog"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  
  profileset."Ring-bound / Onyx"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Ring-bound / Onyx"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  
  profileset."Ring-bound / Diurna"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Ring-bound / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=535
  
  profileset."Titanic / Eggnog"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Titanic / Eggnog"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  
  profileset."Titanic / Onyx"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Titanic / Onyx"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  
  profileset."Titanic / Diurna"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Titanic / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=535
  
  profileset."Eggnog / Onyx"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  profileset."Eggnog / Onyx"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  
  profileset."Eggnog / Diurna"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  profileset."Eggnog / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=535
  `;
