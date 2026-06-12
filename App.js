import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Linking } from 'react-native';

const API_URL = 'https://ngrok-free.dev';

// 🖼️ Corrected Google Drive direct image links
const PRODUCT_IMAGES = {
  "Tomato___Early_blight": [
    { 
      "name": "neem_oil", 
      "image": "https://drive.google.com/uc?export=view&id=1OUiK36lUNzgbhAHy9J1YKgilnj5OERQf", 
      "url": "https://example.com" 
    },
    { 
      "name": "copper_fungicide", 
      "image": "https://drive.google.com/uc?export=view&id=1E51AM5L-Gj3pTb33DS9nmDyRBx4_gXZM", 
      "url": "https://example.com" 
    },
  ],
  "Tomato___Late_blight": [
    { 
      "name": "mancozeb", 
      "image": "https://drive.google.com/uc?export=view&id=1OUiK36lUNzgbhAHy9J1YKgilnj5OERQf", 
      "url": "https://example.com" 
    }
  ],
  "Normal": [
  ]
};
const productData = {
  "Acne": [
    {
      "name": "Acsolve Topical Lotion",
      "image": require("./assets/PFC-Updated/Acne/acsolve_topical_lotion.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Adapco Cream",
      "image": require("./assets/PFC-Updated/Acne/adapco_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Adapco Gel",
      "image": require("./assets/PFC-Updated/Acne/adapco_gel.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Benclin Gel",
      "image": require("./assets/PFC-Updated/Acne/benclin_gel.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Benzacide Bar",
      "image": require("./assets/PFC-Updated/Acne/benzacide_bar.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Mandelac Face Wash",
      "image": require("./assets/PFC-Updated/Acne/mandelac_face_wash.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Maxinoin Capsules",
      "image": require("./assets/PFC-Updated/Acne/maxinoin_capsules.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Saniderm Pimple Patch",
      "image": require("./assets/PFC-Updated/Acne/saniderm_pimple_patch.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Skin A Cream",
      "image": require("./assets/PFC-Updated/Acne/skin_a_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Skinoren Cream",
      "image": require("./assets/PFC-Updated/Acne/skinoren_cream.webp"),
      "url": "https://google.com"
    },
  ],
  "Blackheads": [
    {
      "name": "Adapalene Gel",
      "image": require("./assets/PFC-Updated/Blackheads/adapalene_gel.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Antimicrobial Purifying Mist",
      "image": require("./assets/PFC-Updated/Blackheads/antimicrobial_purifying_mist.webp"),
      "url": "https://google.com"
    },
    {
      "name": "BALANCEFUL Toner Pad",
      "image": require("./assets/PFC-Updated/Blackheads/balanceful_toner_pad.webp"),
      "url": "https://google.com"
    },
    {
      "name": "BHA Peeling Ampoule",
      "image": require("./assets/PFC-Updated/Blackheads/bha_peeling_ampoule.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Calm Down",
      "image": require("./assets/PFC-Updated/Blackheads/calm_down.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Cheer Up",
      "image": require("./assets/PFC-Updated/Blackheads/cheer_up.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Heartleaf",
      "image": require("./assets/PFC-Updated/Blackheads/heartleaf.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Mandelic Acid",
      "image": require("./assets/PFC-Updated/Blackheads/mandelic_acid.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Porebright Serum N10",
      "image": require("./assets/PFC-Updated/Blackheads/porebright_serum_n10.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Toleriane Purifying Foaming Cleanser",
      "image": require("./assets/PFC-Updated/Blackheads/toleriane_purifying_foaming_cleanser.webp"),
      "url": "https://google.com"
    },
  ],
  "Dark-Spots": [
    {
      "name": "AXIS-Y",
      "image": require("./assets/PFC-Updated/Dark-Spots/axis_y.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Anua Niacinamide 5 TXA Brightening Pad",
      "image": require("./assets/PFC-Updated/Dark-Spots/anua_niacinamide_5_txa_brightening_pad.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Anua Niacinamide",
      "image": require("./assets/PFC-Updated/Dark-Spots/anua_niacinamide.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Goodal Green Tangerine",
      "image": require("./assets/PFC-Updated/Dark-Spots/goodal_green_tangerine.webp"),
      "url": "https://google.com"
    },
    {
      "name": "La Prairie Cellular 3-Minute Peel",
      "image": require("./assets/PFC-Updated/Dark-Spots/la_prairie_cellular_3_minute_peel.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Medicube Kojic Acid Turmeric Night Wrapping Mask",
      "image": require("./assets/PFC-Updated/Dark-Spots/medicube_kojic_acid_turmeric_night_wrapping_mask.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Mela B3 Serum",
      "image": require("./assets/PFC-Updated/Dark-Spots/mela_b3_serum.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Olay Vitamin C Hydrating Moisturizer",
      "image": require("./assets/PFC-Updated/Dark-Spots/olay_vitamin_c_hydrating_moisturizer.webp"),
      "url": "https://google.com"
    },
    {
      "name": "SkinCeuticals Metacell Renewal B3",
      "image": require("./assets/PFC-Updated/Dark-Spots/skinceuticals_metacell_renewal_b3.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Tranexamic Acid + Glutathione Eye Cream",
      "image": require("./assets/PFC-Updated/Dark-Spots/tranexamic_acid_glutathione_eye_cream.webp"),
      "url": "https://google.com"
    },
  ],
  "Dry-Skin": [
    {
      "name": "Dermive Moisturizer Lotion",
      "image": require("./assets/PFC-Updated/Dry-Skin/dermive_moisturizer_lotion.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Hydrolatum Bar",
      "image": require("./assets/PFC-Updated/Dry-Skin/hydrolatum_bar.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Hydrophil Moisturizing Lotion",
      "image": require("./assets/PFC-Updated/Dry-Skin/hydrophil_moisturizing_lotion.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Mixit Ointment",
      "image": require("./assets/PFC-Updated/Dry-Skin/mixit_ointment.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Neuage Moisturizer Lotion",
      "image": require("./assets/PFC-Updated/Dry-Skin/neuage_moisturizer_lotion.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Pure glycerine",
      "image": require("./assets/PFC-Updated/Dry-Skin/pure_glycerine.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Pureglycerine",
      "image": require("./assets/PFC-Updated/Dry-Skin/pureglycerine.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Sofner Moisturizing Lotion",
      "image": require("./assets/PFC-Updated/Dry-Skin/sofner_moisturizing_lotion.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Suncoat Gel",
      "image": require("./assets/PFC-Updated/Dry-Skin/suncoat_gel.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Zarnol Lotion",
      "image": require("./assets/PFC-Updated/Dry-Skin/zarnol_lotion.webp"),
      "url": "https://google.com"
    },
  ],
  "Englarged-Pores": [
    {
      "name": "BeautyStat Universal C Skin Refiner",
      "image": require("./assets/PFC-Updated/Englarged-Pores/beautystat_universal_c_skin_refiner.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Fenty Beauty Fat Water Toner Essence",
      "image": require("./assets/PFC-Updated/Englarged-Pores/fenty_beauty_fat_water_toner_essence.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Glossier Super Pure Niacinamide + Zinc",
      "image": require("./assets/PFC-Updated/Englarged-Pores/glossier_super_pure_niacinamide_zinc.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Kate Somerville ExfoliKate",
      "image": require("./assets/PFC-Updated/Englarged-Pores/kate_somerville_exfolikate.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Paula's Choice Daily Treatment with 2% BHA",
      "image": require("./assets/PFC-Updated/Englarged-Pores/paula_s_choice_daily_treatment_with_2_bha.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Paula's Choice Invisible Finish Moisture Gel",
      "image": require("./assets/PFC-Updated/Englarged-Pores/paula_s_choice_invisible_finish_moisture_gel.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Perricone MD Intensive Pore Minimizing Toner",
      "image": require("./assets/PFC-Updated/Englarged-Pores/perricone_md_intensive_pore_minimizing_toner.webp"),
      "url": "https://google.com"
    },
    {
      "name": "RoC Retinol Correxion Night Cream",
      "image": require("./assets/PFC-Updated/Englarged-Pores/roc_retinol_correxion_night_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Sweet Orange Brightening Cleanser",
      "image": require("./assets/PFC-Updated/Englarged-Pores/sweet_orange_brightening_cleanser.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "e.l.f. Poreless Putty Primer",
      "image": require("./assets/PFC-Updated/Englarged-Pores/e_l_f_poreless_putty_primer.webp"),
      "url": "https://google.com"
    },
  ],
  "Eyebags": [
    {
      "name": "BIOAQUA Eye Esence Serum",
      "image": require("./assets/PFC-Updated/Eyebags/bioaqua_eye_esence_serum.webp"),
      "url": "https://google.com"
    },
    {
      "name": "CeraVe Eye Repair Cream",
      "image": require("./assets/PFC-Updated/Eyebags/cerave_eye_repair_cream.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "Gel Eye Mask",
      "image": require("./assets/PFC-Updated/Eyebags/gel_eye_mask.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Instant Eye Bag Removal Patch",
      "image": require("./assets/PFC-Updated/Eyebags/instant_eye_bag_removal_patch.webp"),
      "url": "https://google.com"
    },
    {
      "name": "JOMTAM Retinol Caviar Eye Cream",
      "image": require("./assets/PFC-Updated/Eyebags/jomtam_retinol_caviar_eye_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Kiehl's Avocado Eye Treatment",
      "image": require("./assets/PFC-Updated/Eyebags/kiehl_s_avocado_eye_treatment.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "RoC Retinol Correxion",
      "image": require("./assets/PFC-Updated/Eyebags/roc_retinol_correxion.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "Rose Hyaluronic Acid",
      "image": require("./assets/PFC-Updated/Eyebags/rose_hyaluronic_acid.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Wonder Blueberry Eye Cream",
      "image": require("./assets/PFC-Updated/Eyebags/wonder_blueberry_eye_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "goPure NEW Instant Lift Eye Gel",
      "image": require("./assets/PFC-Updated/Eyebags/gopure_new_instant_lift_eye_gel.jpg"),
      "url": "https://google.com"
    },
  ],
  "Normal Skin": [
  ],
  "Oily-Skin": [
    {
      "name": "Bubble Level Up Balancing Moisturizer",
      "image": require("./assets/PFC-Updated/Oily-Skin/bubble_level_up_balancing_moisturizer.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "Buttah Skin Oil-Free Hyaluronic Gel",
      "image": require("./assets/PFC-Updated/Oily-Skin/buttah_skin_oil_free_hyaluronic_gel.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "CeraVe Foaming Facial Cleanser",
      "image": require("./assets/PFC-Updated/Oily-Skin/cerave_foaming_facial_cleanser.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "CeraVe Oil Control Moisturizing Gel-Cream",
      "image": require("./assets/PFC-Updated/Oily-Skin/cerave_oil_control_moisturizing_gel_cream.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "Cetaphil Daily Facial Cleanser",
      "image": require("./assets/PFC-Updated/Oily-Skin/cetaphil_daily_facial_cleanser.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "Oil Control Face Wash",
      "image": require("./assets/PFC-Updated/Oily-Skin/oil_control_face_wash.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Saffron Complexion Builder",
      "image": require("./assets/PFC-Updated/Oily-Skin/saffron_complexion_builder.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Sunscreen SPF 60",
      "image": require("./assets/PFC-Updated/Oily-Skin/sunscreen_spf_60.webp"),
      "url": "https://google.com"
    },
    {
      "name": "natural outcome Oily Skin Cleanser",
      "image": require("./assets/PFC-Updated/Oily-Skin/natural_outcome_oily_skin_cleanser.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "tea_tree_face_wash",
      "image": require("./assets/PFC-Updated/Oily-Skin/tea_tree_face_wash.webp"),
      "url": "https://google.com"
    },
  ],
  "Skin-Redness": [
    {
      "name": "Anua Azelaic Acid 10 Hyaluron",
      "image": require("./assets/PFC-Updated/Skin-Redness/anua_azelaic_acid_10_hyaluron.webp"),
      "url": "https://google.com"
    },
    {
      "name": "COSRX AC Collection Calming Foam Cleanser",
      "image": require("./assets/PFC-Updated/Skin-Redness/cosrx_ac_collection_calming_foam_cleanser.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Dr. Althea 345 Relief Cream",
      "image": require("./assets/PFC-Updated/Skin-Redness/dr_althea_345_relief_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Glow Recipe Avocado Ceramide",
      "image": require("./assets/PFC-Updated/Skin-Redness/glow_recipe_avocado_ceramide.webp"),
      "url": "https://google.com"
    },
    {
      "name": "I'm From Mugwort Mask",
      "image": require("./assets/PFC-Updated/Skin-Redness/i_m_from_mugwort_mask.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Jumiso Super Soothing Cica & Aloe",
      "image": require("./assets/PFC-Updated/Skin-Redness/jumiso_super_soothing_cica_aloe.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Madagascar Centella Air-Fit Suncream",
      "image": require("./assets/PFC-Updated/Skin-Redness/madagascar_centella_air_fit_suncream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Madagascar Centella Hyalu-Cica Blue Serum",
      "image": require("./assets/PFC-Updated/Skin-Redness/madagascar_centella_hyalu_cica_blue_serum.webp"),
      "url": "https://google.com"
    },
    {
      "name": "One Step Original Clear Skin Calming Pad",
      "image": require("./assets/PFC-Updated/Skin-Redness/one_step_original_clear_skin_calming_pad.webp"),
      "url": "https://google.com"
    },
    {
      "name": "SKIN1004 Madagascar Centella Cream",
      "image": require("./assets/PFC-Updated/Skin-Redness/skin1004_madagascar_centella_cream.webp"),
      "url": "https://google.com"
    },
  ],
  "Whiteheads": [
    {
      "name": "8% Glycolic Acid Toner Spray",
      "image": require("./assets/PFC-Updated/Whiteheads/8_glycolic_acid_toner_spray.webp"),
      "url": "https://google.com"
    },
    {
      "name": "ABP-11% Gentle Exfoliating",
      "image": require("./assets/PFC-Updated/Whiteheads/abp_11_gentle_exfoliating.webp"),
      "url": "https://google.com"
    },
    {
      "name": "ABP-22% Weekly Exfoliating",
      "image": require("./assets/PFC-Updated/Whiteheads/abp_22_weekly_exfoliating.webp"),
      "url": "https://google.com"
    },
    {
      "name": "ABP-33% Strong Exfoliating",
      "image": require("./assets/PFC-Updated/Whiteheads/abp_33_strong_exfoliating.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Acne Treatment Pads",
      "image": require("./assets/PFC-Updated/Whiteheads/acne_treatment_pads.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "COSRX 7% Glycolic Acid",
      "image": require("./assets/PFC-Updated/Whiteheads/cosrx_7_glycolic_acid.jpg"),
      "url": "https://google.com"
    },
    {
      "name": "FC-3 Exfoliating Face Cleanser",
      "image": require("./assets/PFC-Updated/Whiteheads/fc_3_exfoliating_face_cleanser.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Original White Black Head Remover Machine",
      "image": require("./assets/PFC-Updated/Whiteheads/original_white_black_head_remover_machine.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Portable Electric White Head Remover",
      "image": require("./assets/PFC-Updated/Whiteheads/portable_electric_white_head_remover.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Salicylic Acid BHA-2% Encapsulated",
      "image": require("./assets/PFC-Updated/Whiteheads/salicylic_acid_bha_2_encapsulated.webp"),
      "url": "https://google.com"
    },
  ],
  "Wrinkles": [
    {
      "name": "Fresh Black Tea Firming Corset Cream",
      "image": require("./assets/PFC-Updated/Wrinkles/fresh_black_tea_firming_corset_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Mary Kay TimeWise Antioxidant Moisturizer",
      "image": require("./assets/PFC-Updated/Wrinkles/mary_kay_timewise_antioxidant_moisturizer.webp"),
      "url": "https://google.com"
    },
    {
      "name": "NeoStrata Triple Firming Neck Cream",
      "image": require("./assets/PFC-Updated/Wrinkles/neostrata_triple_firming_neck_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Neutrogena Rapid Wrinkle Repair",
      "image": require("./assets/PFC-Updated/Wrinkles/neutrogena_rapid_wrinkle_repair.webp"),
      "url": "https://google.com"
    },
    {
      "name": "No7 Protect & Perfect Intense Advanced Night Cream",
      "image": require("./assets/PFC-Updated/Wrinkles/no7_protect_perfect_intense_advanced_night_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "No7 Restore & Renew Multi Action Eye Cream",
      "image": require("./assets/PFC-Updated/Wrinkles/no7_restore_renew_multi_action_eye_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Olay Regenerist Micro-Sculpting Cream",
      "image": require("./assets/PFC-Updated/Wrinkles/olay_regenerist_micro_sculpting_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Olay Regenerist Retinol 24 Night Facial Cream",
      "image": require("./assets/PFC-Updated/Wrinkles/olay_regenerist_retinol_24_night_facial_cream.webp"),
      "url": "https://google.com"
    },
    {
      "name": "Philosophy Anti-Wrinkle Miracle Worker",
      "image": require("./assets/PFC-Updated/Wrinkles/philosophy_anti_wrinkle_miracle_worker.webp"),
      "url": "https://google.com"
    },
    {
      "name": "RoC Skincare Multi Correxion Even Tone + Lift",
      "image": require("./assets/PFC-Updated/Wrinkles/roc_skincare_multi_correxion_even_tone_lift.webp"),
      "url": "https://google.com"
    },
  ],
};

export default function App() {
  // Currently showing Early Blight products as per your logic
  const products = productData["Acne"] || [];

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.paragraph}>Recommended Products</Text>
        
        <View style={styles.productGrid}>
          {products.map((product, idx) => (
            <TouchableOpacity 
              key={idx} 
              style={styles.productCard} 
              onPress={() => Linking.openURL(product.url)}
            >
              <Image 
                source={product.image } 
                style={styles.productImage} 
                resizeMode="contain" 
                onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
              />
              <Text style={styles.productName} numberOfLines={2}>
                {product.name.replace(/_/g, ' ')}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  scrollContainer: {
    padding: 16,
    paddingTop: 60,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 4,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#f9f9f9', // Light background while loading
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#34495e',
    textTransform: 'capitalize',
  },
});