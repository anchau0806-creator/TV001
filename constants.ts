import type { TarotCard, Skin, Settings } from './types';

export const TAROT_DECK: TarotCard[] = [
  {
    "id": "0", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Kẻ Khờ", "en": "The Fool" },
    "meaningUpright": { "vi": "Khởi đầu, tự do, niềm tin", "en": "Beginnings, freedom, faith" },
    "meaningReversed": { "vi": "Liều lĩnh, ngây thơ, thiếu chuẩn bị", "en": "Recklessness, naivety, lack of preparation" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/fool.jpg"
  },
  {
    "id": "1", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Pháp Sư", "en": "The Magician" },
    "meaningUpright": { "vi": "Tập trung, hiện thực hóa, kỹ năng", "en": "Focus, manifestation, skill" },
    "meaningReversed": { "vi": "Lừa dối, phân tán, tiềm năng kẹt", "en": "Deception, scattered energy, blocked potential" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/magician.jpg"
  },
  {
    "id": "2", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Nữ Tư Tế", "en": "The High Priestess" },
    "meaningUpright": { "vi": "Trực giác, bí ẩn, nội tâm", "en": "Intuition, mystery, inner self" },
    "meaningReversed": { "vi": "Bí mật che giấu, tự nghi, xa cách", "en": "Hidden secrets, self-doubt, isolation" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/highpriestess.jpg"
  },
  {
    "id": "3", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Nữ Hoàng", "en": "The Empress" },
    "meaningUpright": { "vi": "Nuôi dưỡng, phồn vinh, sáng tạo", "en": "Nurturing, abundance, creativity" },
    "meaningReversed": { "vi": "Quá nuông chiều, trì trệ, lệ thuộc", "en": "Over-indulgence, stagnation, dependence" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/empress.jpg"
  },
  {
    "id": "4", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Hoàng Đế", "en": "The Emperor" },
    "meaningUpright": { "vi": "Trật tự, lãnh đạo, cấu trúc", "en": "Order, leadership, structure" },
    "meaningReversed": { "vi": "Cứng nhắc, kiểm soát, độc đoán", "en": "Rigidity, control, tyranny" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/emperor.jpg"
  },
  {
    "id": "5", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Giáo Hoàng", "en": "The Hierophant" },
    "meaningUpright": { "vi": "Truyền thống, chuẩn mực, cố vấn", "en": "Tradition, convention, guidance" },
    "meaningReversed": { "vi": "Bảo thủ, giáo điều, nổi loạn mù quáng", "en": "Conservatism, dogma, blind rebellion" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/heirophant.jpg"
  },
  {
    "id": "6", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Những Người Yêu", "en": "The Lovers" },
    "meaningUpright": { "vi": "Lựa chọn trái tim, hòa hợp, giá trị", "en": "Heartfelt choices, harmony, values" },
    "meaningReversed": { "vi": "Lưỡng lự, lệch giá trị, đứt gãy", "en": "Indecision, misalignment of values, rupture" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/lovers.jpg"
  },
  {
    "id": "7", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Cỗ Xe", "en": "The Chariot" },
    "meaningUpright": { "vi": "Quyết chí, chiến thắng, kỷ luật", "en": "Determination, victory, discipline" },
    "meaningReversed": { "vi": "Thiếu định hướng, bốc đồng, xung đột", "en": "Lack of direction, impulsiveness, conflict" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/chariot.jpg"
  },
  {
    "id": "8", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Sức Mạnh", "en": "Strength" },
    "meaningUpright": { "vi": "Can đảm, kiên nhẫn, tự chủ", "en": "Courage, patience, self-control" },
    "meaningReversed": { "vi": "Tự ti, nản chí, nổi nóng", "en": "Self-doubt, discouragement, temper" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/strength.jpg"
  },
  {
    "id": "9", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Ẩn Sĩ", "en": "The Hermit" },
    "meaningUpright": { "vi": "Tĩnh lặng, soi chiếu, trí tuệ", "en": "Silence, introspection, wisdom" },
    "meaningReversed": { "vi": "Cô lập, né tránh, bế tắc", "en": "Isolation, avoidance, stalemate" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/hermit.jpg"
  },
  {
    "id": "10", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Bánh Xe Số Phận", "en": "Wheel of Fortune" },
    "meaningUpright": { "vi": "Chu kỳ, vận may, bước ngoặt", "en": "Cycles, luck, turning point" },
    "meaningReversed": { "vi": "Trì trệ, kháng đổi thay, lỡ thời", "en": "Stagnation, resistance to change, missed opportunity" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/wheeloffortune.jpg"
  },
  {
    "id": "11", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Công Lý", "en": "Justice" },
    "meaningUpright": { "vi": "Công bằng, thật-giả, nhân-quả", "en": "Fairness, truth vs. falsehood, cause and effect" },
    "meaningReversed": { "vi": "Thiên vị, thiếu trách nhiệm, trì hoãn", "en": "Bias, lack of responsibility, postponement" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/justice.jpg"
  },
  {
    "id": "12", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Người Bị Treo", "en": "The Hanged Man" },
    "meaningUpright": { "vi": "Buông xả, góc nhìn mới, hy sinh", "en": "Letting go, new perspective, sacrifice" },
    "meaningReversed": { "vi": "Mắc kẹt, chần chừ, phí hoài", "en": "Stuck, hesitation, waste" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/hangedman.jpg"
  },
  {
    "id": "13", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Cái Chết", "en": "Death" },
    "meaningUpright": { "vi": "Kết thúc-tái sinh, lột xác", "en": "Endings and rebirth, transformation" },
    "meaningReversed": { "vi": "Níu giữ cũ, sợ đổi thay, bế mạc", "en": "Clinging to the past, fear of change, closure" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/death.jpg"
  },
  {
    "id": "14", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Tiết Độ", "en": "Temperance" },
    "meaningUpright": { "vi": "Cân bằng, điều hòa, dung hợp", "en": "Balance, moderation, integration" },
    "meaningReversed": { "vi": "Quá đà, thiếu kiên nhẫn, lệch pha", "en": "Excess, impatience, imbalance" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/temperance.jpg"
  },
  {
    "id": "15", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Ác Quỷ", "en": "The Devil" },
    "meaningUpright": { "vi": "Ràng buộc, cám dỗ, ám ảnh", "en": "Bondage, temptation, obsession" },
    "meaningReversed": { "vi": "Thoát nghiện, thức tỉnh, cắt dây", "en": "Breaking free from addiction, awakening, cutting ties" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/devil.jpg"
  },
  {
    "id": "16", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Tòa Tháp", "en": "The Tower" },
    "meaningUpright": { "vi": "Sụp đổ, sự thật lộ diện, giải phóng", "en": "Collapse, truth revealed, liberation" },
    "meaningReversed": { "vi": "Chối bỏ khủng hoảng, sập chậm", "en": "Denial of crisis, slow collapse" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/tower.jpg"
  },
  {
    "id": "17", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Ngôi Sao", "en": "The Star" },
    "meaningUpright": { "vi": "Hy vọng, chữa lành, cảm hứng", "en": "Hope, healing, inspiration" },
    "meaningReversed": { "vi": "Nghi ngờ, cạn niềm tin, tự ti", "en": "Doubt, loss of faith, low self-esteem" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/star.jpg"
  },
  {
    "id": "18", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Mặt Trăng", "en": "The Moon" },
    "meaningUpright": { "vi": "Vô thức, ảo ảnh, cảm xúc sâu", "en": "The unconscious, illusion, deep emotions" },
    "meaningReversed": { "vi": "Hoang mang, lầm lạc, lo âu", "en": "Confusion, delusion, anxiety" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/moon.jpg"
  },
  {
    "id": "19", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Mặt Trời", "en": "The Sun" },
    "meaningUpright": { "vi": "Thành công, rõ ràng, niềm vui", "en": "Success, clarity, joy" },
    "meaningReversed": { "vi": "Tự mãn, hoãn vui, tầm nhìn hẹp", "en": "Smugness, delayed joy, narrow vision" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/sun.jpg"
  },
  {
    "id": "20", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Phán Xét", "en": "Judgement" },
    "meaningUpright": { "vi": "Thức tỉnh, kêu gọi, tái sinh", "en": "Awakening, calling, rebirth" },
    "meaningReversed": { "vi": "Tự phán xét gay gắt, bỏ lỡ cơ hội", "en": "Harsh self-judgment, missed opportunities" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/judgment.jpg"
  },
  {
    "id": "21", "arcana": "Major", "suit": "nan",
    "name": { "vi": "Thế Giới", "en": "The World" },
    "meaningUpright": { "vi": "Hoàn tất, tích hợp, tự do", "en": "Completion, integration, freedom" },
    "meaningReversed": { "vi": "Chu kỳ chưa khép, thiếu khép lại", "en": "Unfinished cycle, lack of closure" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/world.jpg"
  },
  {
    "id": "C1", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Át Chén", "en": "Ace of Cups" },
    "meaningUpright": { "vi": "Tình cảm mới, trái tim mở", "en": "New emotions, open heart" },
    "meaningReversed": { "vi": "Tắc nghẽn cảm xúc, khép kín", "en": "Blocked emotions, withdrawn" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/acecups.jpg"
  },
  {
    "id": "C2", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Hai Chén", "en": "Two of Cups" },
    "meaningUpright": { "vi": "Kết đôi, hòa hợp", "en": "Partnership, harmony" },
    "meaningReversed": { "vi": "Lệch nhịp, đứt kết nối", "en": "Misalignment, broken connection" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/2cups.jpg"
  },
  {
    "id": "C3", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Ba Chén", "en": "Three of Cups" },
    "meaningUpright": { "vi": "Bạn bè, cộng đồng, vui chung", "en": "Friendship, community, shared joy" },
    "meaningReversed": { "vi": "Quá đà tiệc tùng, bè phái", "en": "Excessive partying, cliques" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/3cups.jpg"
  },
  {
    "id": "C4", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Bốn Chén", "en": "Four of Cups" },
    "meaningUpright": { "vi": "Chán nản, bỏ lỡ cơ hội", "en": "Apathy, missed opportunities" },
    "meaningReversed": { "vi": "Tỉnh thức, mở lòng trở lại", "en": "Awakening, reopening the heart" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/4cups.jpg"
  },
  {
    "id": "C5", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Năm Chén", "en": "Five of Cups" },
    "meaningUpright": { "vi": "Mất mát, tiếc nuối", "en": "Loss, regret" },
    "meaningReversed": { "vi": "Chữa lành, nhìn phần còn lại", "en": "Healing, seeing what remains" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/5cups.jpg"
  },
  {
    "id": "C6", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Sáu Chén", "en": "Six of Cups" },
    "meaningUpright": { "vi": "Hoài niệm, tử tế", "en": "Nostalgia, kindness" },
    "meaningReversed": { "vi": "Mắc kẹt quá khứ, ấu trĩ", "en": "Stuck in the past, childishness" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/6cups.jpg"
  },
  {
    "id": "C7", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Bảy Chén", "en": "Seven of Cups" },
    "meaningUpright": { "vi": "Ảo mộng, quá nhiều lựa chọn", "en": "Illusion, too many choices" },
    "meaningReversed": { "vi": "Rõ ưu tiên, bớt mơ hồ", "en": "Clear priorities, less ambiguity" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/7cups.jpg"
  },
  {
    "id": "C8", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Tám Chén", "en": "Eight of Cups" },
    "meaningUpright": { "vi": "Rút lui, tìm ý nghĩa", "en": "Withdrawal, seeking meaning" },
    "meaningReversed": { "vi": "Lưỡng lự, quay lại cái cũ", "en": "Indecision, returning to the old" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/8cups.jpg"
  },
  {
    "id": "C9", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Chín Chén", "en": "Nine of Cups" },
    "meaningUpright": { "vi": "Mãn nguyện, điều ước", "en": "Contentment, wish fulfilled" },
    "meaningReversed": { "vi": "Thỏa mãn hời hợt, hưởng thụ quá", "en": "Superficial satisfaction, overindulgence" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/9cups.jpg"
  },
  {
    "id": "C10", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Mười Chén", "en": "Ten of Cups" },
    "meaningUpright": { "vi": "Hạnh phúc viên mãn, gia đình", "en": "Complete happiness, family" },
    "meaningReversed": { "vi": "Hình thức bên ngoài, rạn nứt kín", "en": "Superficial appearance, hidden cracks" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/10cups.jpg"
  },
  {
    "id": "C11", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Tiểu đồng Chén", "en": "Page of Cups" },
    "meaningUpright": { "vi": "Nhạy cảm, tin vui cảm xúc", "en": "Sensitivity, happy emotional news" },
    "meaningReversed": { "vi": "Dễ tổn thương, mơ mộng quá", "en": "Vulnerability, excessive daydreaming" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/pagecups.jpg"
  },
  {
    "id": "C12", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Kỵ sĩ Chén", "en": "Knight of Cups" },
    "meaningUpright": { "vi": "Lãng mạn, đề nghị, lý tưởng", "en": "Romance, proposal, idealism" },
    "meaningReversed": { "vi": "Lý tưởng hóa, thất vọng", "en": "Idealization, disappointment" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/knightcups.jpg"
  },
  {
    "id": "C13", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Nữ hoàng Chén", "en": "Queen of Cups" },
    "meaningUpright": { "vi": "Thấu cảm, chữa lành", "en": "Empathy, healing" },
    "meaningReversed": { "vi": "Quá cảm tính, phụ thuộc", "en": "Overly emotional, dependent" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/queencups.jpg"
  },
  {
    "id": "C14", "arcana": "Minor", "suit": "Cups",
    "name": { "vi": "Vua Chén", "en": "King of Cups" },
    "meaningUpright": { "vi": "Trí tuệ cảm xúc, cân bằng", "en": "Emotional intelligence, balance" },
    "meaningReversed": { "vi": "Kìm nén, thao túng cảm xúc", "en": "Repression, emotional manipulation" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/kingcups.jpg"
  },
  {
    "id": "P1", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Át Xu", "en": "Ace of Pentacles" },
    "meaningUpright": { "vi": "Cơ hội tài chính, hạt giống", "en": "Financial opportunity, seed" },
    "meaningReversed": { "vi": "Bỏ lỡ, đầu tư non", "en": "Missed opportunity, premature investment" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/acepent.jpg"
  },
  {
    "id": "P2", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Hai Xu", "en": "Two of Pentacles" },
    "meaningUpright": { "vi": "Cân bằng nguồn lực, xoay xở", "en": "Balancing resources, juggling" },
    "meaningReversed": { "vi": "Quá tải, lộn xộn", "en": "Overwhelmed, disorganized" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/2pent.jpg"
  },
  {
    "id": "P3", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Ba Xu", "en": "Three of Pentacles" },
    "meaningUpright": { "vi": "Hợp tác, tay nghề", "en": "Collaboration, craftsmanship" },
    "meaningReversed": { "vi": "Thiếu phối hợp, tay nghề cần nâng", "en": "Lack of coordination, skills need improvement" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/3pent.jpg"
  },
  {
    "id": "P4", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Bốn Xu", "en": "Four of Pentacles" },
    "meaningUpright": { "vi": "Giữ chặt, an toàn", "en": "Holding on, security" },
    "meaningReversed": { "vi": "Keo kiệt, sợ thiếu", "en": "Stinginess, fear of lack" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/4pent.jpg"
  },
  {
    "id": "P5", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Năm Xu", "en": "Five of Pentacles" },
    "meaningUpright": { "vi": "Khó khăn, thiếu thốn", "en": "Hardship, lack" },
    "meaningReversed": { "vi": "Tìm trợ giúp, cửa sáng", "en": "Seeking help, a light at the end of the tunnel" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/5pent.jpg"
  },
  {
    "id": "P6", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Sáu Xu", "en": "Six of Pentacles" },
    "meaningUpright": { "vi": "Cho-nhận cân bằng", "en": "Balanced giving and receiving" },
    "meaningReversed": { "vi": "Bất cân xứng, phụ thuộc", "en": "Imbalance, dependency" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/6pent.jpg"
  },
  {
    "id": "P7", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Bảy Xu", "en": "Seven of Pentacles" },
    "meaningUpright": { "vi": "Kiên nhẫn, trồng trọt chờ gặt", "en": "Patience, cultivation awaiting harvest" },
    "meaningReversed": { "vi": "Nóng vội, lối đi khác", "en": "Impatience, a different path" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/7pent.jpg"
  },
  {
    "id": "P8", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Tám Xu", "en": "Eight of Pentacles" },
    "meaningUpright": { "vi": "Rèn nghề, chăm chỉ", "en": "Honing skills, diligence" },
    "meaningReversed": { "vi": "Lặp lại nhàm chán, cần nâng chuẩn", "en": "Tedious repetition, standards need raising" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/8pent.jpg"
  },
  {
    "id": "P9", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Chín Xu", "en": "Nine of Pentacles" },
    "meaningUpright": { "vi": "Tự chủ, hưởng thành quả", "en": "Self-reliance, enjoying the fruits of labor" },
    "meaningReversed": { "vi": "Lệ thuộc ngầm, cô lập", "en": "Hidden dependency, isolation" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/9pent.jpg"
  },
  {
    "id": "P10", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Mười Xu", "en": "Ten of Pentacles" },
    "meaningUpright": { "vi": "Gia sản, bền vững dài hạn", "en": "Legacy, long-term stability" },
    "meaningReversed": { "vi": "Xung đột gia tộc, giá trị cũ", "en": "Family conflict, old values" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/10pent.jpg"
  },
  {
    "id": "P11", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Tiểu đồng Xu", "en": "Page of Pentacles" },
    "meaningUpright": { "vi": "Học nghề, ý tưởng kiếm tiền", "en": "Apprenticeship, money-making ideas" },
    "meaningReversed": { "vi": "Thiếu kiên trì, thực dụng hẹp", "en": "Lack of perseverance, narrow-minded pragmatism" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/pagepent.jpg"
  },
  {
    "id": "P12", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Kỵ sĩ Xu", "en": "Knight of Pentacles" },
    "meaningUpright": { "vi": "Bền bỉ, kỷ luật, ổn định", "en": "Persistence, discipline, stability" },
    "meaningReversed": { "vi": "Bảo thủ, chậm chạp", "en": "Conservative, slow-moving" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/knightpent.jpg"
  },
  {
    "id": "P13", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Nữ hoàng Xu", "en": "Queen of Pentacles" },
    "meaningUpright": { "vi": "Nuôi dưỡng vật chất, thực tế", "en": "Material nurturing, practicality" },
    "meaningReversed": { "vi": "Quá tải chăm lo, kiểm soát", "en": "Overburdened with care, controlling" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/queenpent.jpg"
  },
  {
    "id": "P14", "arcana": "Minor", "suit": "Pentacles",
    "name": { "vi": "Vua Xu", "en": "King of Pentacles" },
    "meaningUpright": { "vi": "Doanh chủ, vững chãi, thịnh vượng", "en": "Entrepreneur, stable, prosperous" },
    "meaningReversed": { "vi": "Vật chất hóa, cố chấp", "en": "Materialistic, stubborn" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/kingpent.jpg"
  },
  {
    "id": "S1", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Át Kiếm", "en": "Ace of Swords" },
    "meaningUpright": { "vi": "Sáng suốt, sự thật mới mẻ", "en": "Clarity, new truth" },
    "meaningReversed": { "vi": "Nhiễu loạn, ý nghĩ mù mờ", "en": "Confusion, unclear thoughts" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/aceswords.jpg"
  },
  {
    "id": "S2", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Hai Kiếm", "en": "Two of Swords" },
    "meaningUpright": { "vi": "Bế tắc, cần quyết định", "en": "Stalemate, decision needed" },
    "meaningReversed": { "vi": "Né quyết định, mù thông tin", "en": "Avoiding decision, information blindness" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/2swords.jpg"
  },
  {
    "id": "S3", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Ba Kiếm", "en": "Three of Swords" },
    "meaningUpright": { "vi": "Tổn thương, tan vỡ", "en": "Hurt, heartbreak" },
    "meaningReversed": { "vi": "Chữa lành, tha thứ", "en": "Healing, forgiveness" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/3swords.jpg"
  },
  {
    "id": "S4", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Bốn Kiếm", "en": "Four of Swords" },
    "meaningUpright": { "vi": "Nghỉ ngơi, hồi phục", "en": "Rest, recovery" },
    "meaningReversed": { "vi": "Bồn chồn, kiệt sức kéo dài", "en": "Restlessness, prolonged exhaustion" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/4swords.jpg"
  },
  {
    "id": "S5", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Năm Kiếm", "en": "Five of Swords" },
    "meaningUpright": { "vi": "Thắng-thua độc hại, mưu mẹo", "en": "Toxic win-lose, trickery" },
    "meaningReversed": { "vi": "Buông cái tôi, hòa giải", "en": "Letting go of ego, reconciliation" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/5swords.jpg"
  },
  {
    "id": "S6", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Sáu Kiếm", "en": "Six of Swords" },
    "meaningUpright": { "vi": "Chuyển bến, tĩnh tâm", "en": "Transition, peace of mind" },
    "meaningReversed": { "vi": "Bám cũ, trì hoãn hành trình", "en": "Clinging to the past, delaying the journey" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/6swords.jpg"
  },
  {
    "id": "S7", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Bảy Kiếm", "en": "Seven of Swords" },
    "meaningUpright": { "vi": "Lén lút, chiến lược", "en": "Stealth, strategy" },
    "meaningReversed": { "vi": "Tự lừa dối, bại lộ", "en": "Self-deception, exposure" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/7swords.jpg"
  },
  {
    "id": "S8", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Tám Kiếm", "en": "Eight of Swords" },
    "meaningUpright": { "vi": "Tự trói, sợ hãi", "en": "Self-imprisonment, fear" },
    "meaningReversed": { "vi": "Thoát khuôn, thấy lối ra", "en": "Breaking free, seeing a way out" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/8swords.jpg"
  },
  {
    "id": "S9", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Chín Kiếm", "en": "Nine of Swords" },
    "meaningUpright": { "vi": "Lo âu, mất ngủ", "en": "Anxiety, sleeplessness" },
    "meaningReversed": { "vi": "Thấu hiểu nguyên nhân, giảm tải", "en": "Understanding the cause, relief" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/9swords.jpg"
  },
  {
    "id": "S10", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Mười Kiếm", "en": "Ten of Swords" },
    "meaningUpright": { "vi": "Kết thúc đau đớn, sập", "en": "Painful ending, collapse" },
    "meaningReversed": { "vi": "Bình minh mới, phục sinh", "en": "New dawn, resurrection" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/10swords.jpg"
  },
  {
    "id": "S11", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Tiểu đồng Kiếm", "en": "Page of Swords" },
    "meaningUpright": { "vi": "Tò mò, học hỏi, tin tức", "en": "Curiosity, learning, news" },
    "meaningReversed": { "vi": "Hơi ngờ vực, nói trước nghĩ sau", "en": "Slightly suspicious, speaking before thinking" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/pageswords.jpg"
  },
  {
    "id": "S12", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Kỵ sĩ Kiếm", "en": "Knight of Swords" },
    "meaningUpright": { "vi": "Quyết liệt, logic sắc sảo", "en": "Decisive, sharp logic" },
    "meaningReversed": { "vi": "Hấp tấp, gây chiến", "en": "Hasty, causing conflict" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/knightswords.jpg"
  },
  {
    "id": "S13", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Nữ hoàng Kiếm", "en": "Queen of Swords" },
    "meaningUpright": { "vi": "Rõ ràng, ranh giới, chân thật", "en": "Clarity, boundaries, honesty" },
    "meaningReversed": { "vi": "Lạnh lùng, khắc nghiệt", "en": "Cold, harsh" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/queenswords.jpg"
  },
  {
    "id": "S14", "arcana": "Minor", "suit": "Swords",
    "name": { "vi": "Vua Kiếm", "en": "King of Swords" },
    "meaningUpright": { "vi": "Lý trí, chiến lược", "en": "Reason, strategy" },
    "meaningReversed": { "vi": "Cứng nhắc, duy lý quá mức", "en": "Rigid, excessively rational" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/kingswords.jpg"
  },
  {
    "id": "W1", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Át Gậy", "en": "Ace of Wands" },
    "meaningUpright": { "vi": "Tia lửa mới, khởi xướng", "en": "New spark, initiative" },
    "meaningReversed": { "vi": "Chần chừ, hụt cảm hứng", "en": "Hesitation, lack of inspiration" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/acewands.jpg"
  },
  {
    "id": "W2", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Hai Gậy", "en": "Two of Wands" },
    "meaningUpright": { "vi": "Tầm nhìn, hoạch định", "en": "Vision, planning" },
    "meaningReversed": { "vi": "Sợ mạo hiểm, co cụm", "en": "Fear of risk, withdrawal" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/2wands.jpg"
  },
  {
    "id": "W3", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Ba Gậy", "en": "Three of Wands" },
    "meaningUpright": { "vi": "Mở rộng, đợi thành quả", "en": "Expansion, awaiting results" },
    "meaningReversed": { "vi": "Trì hoãn, kế hoạch kém", "en": "Delay, poor planning" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/3wands.jpg"
  },
  {
    "id": "W4", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Bốn Gậy", "en": "Four of Wands" },
    "meaningUpright": { "vi": "Ăn mừng, nền tảng vững", "en": "Celebration, solid foundation" },
    "meaningReversed": { "vi": "Bất ổn gia đạo, thiếu gắn kết", "en": "Family instability, lack of connection" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/4wands.jpg"
  },
  {
    "id": "W5", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Năm Gậy", "en": "Five of Wands" },
    "meaningUpright": { "vi": "Cạnh tranh, xung đột", "en": "Competition, conflict" },
    "meaningReversed": { "vi": "Né xung đột, hỗn loạn kéo dài", "en": "Avoiding conflict, prolonged chaos" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/5wands.jpg"
  },
  {
    "id": "W6", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Sáu Gậy", "en": "Six of Wands" },
    "meaningUpright": { "vi": "Chiến thắng, ghi nhận", "en": "Victory, recognition" },
    "meaningReversed": { "vi": "Tự cao, mong cầu quá mức", "en": "Arrogance, excessive desire" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/6wands.jpg"
  },
  {
    "id": "W7", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Bảy Gậy", "en": "Seven of Wands" },
    "meaningUpright": { "vi": "Tự vệ, giữ lập trường", "en": "Self-defense, holding one's ground" },
    "meaningReversed": { "vi": "Phòng thủ quá đà, mệt mỏi", "en": "Overly defensive, tired" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/7wands.jpg"
  },
  {
    "id": "W8", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Tám Gậy", "en": "Eight of Wands" },
    "meaningUpright": { "vi": "Tăng tốc, tin đến, di chuyển", "en": "Acceleration, news arriving, movement" },
    "meaningReversed": { "vi": "Trì trệ, nhiễu loạn", "en": "Stagnation, disruption" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/8wands.jpg"
  },
  {
    "id": "W9", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Chín Gậy", "en": "Nine of Wands" },
    "meaningUpright": { "vi": "Kiên cường, gần đích", "en": "Resilience, near the finish line" },
    "meaningReversed": { "vi": "Kiệt sức, cảnh giác quá mức", "en": "Exhaustion, excessive vigilance" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/9wands.jpg"
  },
  {
    "id": "W10", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Mười Gậy", "en": "Ten of Wands" },
    "meaningUpright": { "vi": "Gánh nặng, quá tải", "en": "Burden, overload" },
    "meaningReversed": { "vi": "Buông bớt, phân quyền cần thiết", "en": "Letting go, necessary delegation" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/10wands.jpg"
  },
  {
    "id": "W11", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Tiểu đồng Gậy", "en": "Page of Wands" },
    "meaningUpright": { "vi": "Ý tưởng mới, nhiệt huyết", "en": "New ideas, enthusiasm" },
    "meaningReversed": { "vi": "Thiếu kinh nghiệm, bốc đồng", "en": "Inexperience, impulsiveness" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/pagewands.jpg"
  },
  {
    "id": "W12", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Kỵ sĩ Gậy", "en": "Knight of Wands" },
    "meaningUpright": { "vi": "Hành động nhanh, táo bạo", "en": "Swift action, boldness" },
    "meaningReversed": { "vi": "Nóng vội, thiếu trung thành mục tiêu", "en": "Hasty, lacking loyalty to goals" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/knightwands.jpg"
  },
  {
    "id": "W13", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Nữ hoàng Gậy", "en": "Queen of Wands" },
    "meaningUpright": { "vi": "Tự tin, thu hút, sáng tạo", "en": "Confident, attractive, creative" },
    "meaningReversed": { "vi": "Áp đặt, bốc đồng cảm xúc", "en": "Imposing, emotional impulsiveness" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/queenwands.jpg"
  },
  {
    "id": "W14", "arcana": "Minor", "suit": "Wands",
    "name": { "vi": "Vua Gậy", "en": "King of Wands" },
    "meaningUpright": { "vi": "Lãnh đạo, tầm nhìn, ảnh hưởng", "en": "Leadership, vision, influence" },
    "meaningReversed": { "vi": "Độc đoán, kiểm soát quá chặt", "en": "Tyrannical, overly controlling" },
    "imageUrl": "https://www.thetarotlady.com/wp-content/uploads/2018/12/kingwands.jpg"
  }
];

export const SKINS: Skin[] = [
    { id: 'default', name: {vi: 'Mặc định', en: 'Default'}, description: {vi: 'Giao diện Rider-Waite-Smith cổ điển.', en: 'The classic Rider-Waite-Smith artwork.'}, previewImage: 'https://images.weserv.nl/?url=www.thetarotlady.com/wp-content/uploads/2018/12/fool.jpg&w=600&h=500&fit=fill' },
    { id: 'fantasy', name: {vi: 'Huyền Ảo Phương Tây', en: 'Western Fantasy'}, description: {vi: 'Phong cách huyền ảo, thần thoại phương Tây với rồng, pháp sư và hiệp sĩ.', en: 'Western fantasy and mythology style with dragons, mages, and knights.'}, previewImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/e6ca9e36738259.5727c4e790a74.gif' },
    { id: 'humor', name: {vi: 'Châm Biếm Hài Hước', en: 'Satirical Humor'}, description: {vi: 'Phong cách hoạt hình hài hước, châm biếm và vui nhộn.', en: 'A humorous, satirical, and funny cartoon style.'}, previewImage: 'https://i.pinimg.com/originals/a6/8a/66/a68a66d30b78789a1bbf8a3bd17c8786.gif' },
    { id: 'wuxia', name: {vi: 'Kiếm Hiệp Trung Quốc', en: 'Chinese Wuxia'}, description: {vi: 'Phong cách võ hiệp, kiếm hiệp cổ trang Trung Quốc.', en: 'Chinese traditional martial arts and wuxia style.'}, previewImage: 'https://meviethoa.com/wp-content/uploads/2024/07/v2-94795dd40319eb5e6bf0b2d080b81e7d_b.gif' },
    { id: 'anime', name: {vi: 'Anime Nhật Bản', en: 'Japanese Anime'}, description: {vi: 'Phong cách anime/manga đặc trưng của Nhật Bản.', en: 'A distinctive Japanese anime/manga style.'}, previewImage: 'https://giffiles.alphacoders.com/221/221856.gif' },
    { id: 'cute_animals', name: {vi: 'Động Vật Dễ Thương', en: 'Cute Animals'}, description: {vi: 'Các loài động vật đáng yêu và dễ thương trong vai các nhân vật tarot.', en: 'Cute and adorable animals as tarot characters.'}, previewImage: 'https://i.pinimg.com/originals/ee/42/d9/ee42d91ece376e6847f6941b72269c76.gif' },
    { id: 'custom', name: {vi: 'Tùy Chỉnh Của Bạn', en: 'Your Custom Skin'}, description: {vi: 'Sử dụng hình ảnh bạn tải lên để tạo bộ bài độc đáo của riêng mình.', en: 'Use your own uploaded images to create a unique deck.'}, previewImage: 'https://i.pinimg.com/originals/cc/4c/76/cc4c7674251f5013c729358204279532.gif' },
];

export const MUSIC_TRACKS = [
    { id: 'dreamy', name: { vi: 'Mộng mơ', en: 'Dreamy' }, url: 'https://freepd.com/music/Patience%20Party.mp3' },
    { id: 'warm', name: { vi: 'Ấm áp', en: 'Warm' }, url: 'https://freepd.com/music/Shining%20Stars.mp3' },
    { id: 'deep', name: { vi: 'Sâu lắng', en: 'Deep' }, url: 'https://freepd.com/music/A%20Very%20Brady%20Special.mp3' },
    { id: 'mystery', name: { vi: 'Huyền bí', en: 'Mystery' }, url: 'https://freepd.com/music/Breaking%20Bollywood.mp3' },
    { id: 'nostalgic', name: { vi: 'Hoài niệm', en: 'Nostalgic' }, url: 'https://freepd.com/music/Connecting%20Rainbows.mp3' },
    { id: 'exotic', name: { vi: 'Kỳ lạ', en: 'Exotic' }, url: 'https://freepd.com/music/Coy%20Koi.mp3' },
    { id: 'ancient', name: { vi: 'Cổ đại', en: 'Ancient' }, url: 'https://freepd.com/music/Bollywood%20Groove.mp3' },
];

export const BACKGROUNDS = [
    { id: 'none', name: { vi: 'Không có', en: 'None' }, url: '' },
    { id: 'cute_cat', name: { vi: 'Mèo Dễ Thương', en: 'Cute Cat' }, url: 'https://wallpapers-clan.com/wp-content/uploads/2024/03/bongo-cat-meme-gif-desktop-wallpaper-preview.gif' },
    { id: 'sun_moon', name: { vi: 'Mặt Trời & Mặt Trăng', en: 'Sun and Moon' }, url: 'https://i.pinimg.com/originals/7c/19/fc/7c19fc213f4349473162ea31865ba43a.gif' },
    { id: 'lmamc', name: { vi: 'LMAMC', en: 'LMAMC' }, url: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJlaTdjYjFjZnJpcGw2M2gyMGFkNXlmbTV1MzlwbzlyMTRod2k2ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jyeEUiBsEqgmYDMF7v/giphy.gif' },
    { id: 'destiny', name: { vi: 'Vận Mệnh', en: 'Destiny' }, url: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFvMHVmaGNiandoZzY2ZHRwZjZjZW93cXhrYzdsYzJzdm16Y2VtbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SrWh9peE9r1MTVr8aQ/giphy.gif' },
];

export const DAILY_QUOTA_LIMITS = {
    interpretations: 15,
    images: 50,
};

export const DEFAULT_SETTINGS: Settings = {
  assistantModel: 'gemini-2.5-flash',
  assistantStyle: 'default',
  readingDeck: 'full',
  readingStyle: ['accurate', 'detailed'],
  readingModel: 'gemini-2.5-flash',
  musicTheme: 'ancient',
  musicVolume: 0.5,
  theme: 'mysterious',
  background: 'none',
  customSkinMap: {},
};

const VIETNAMESE_CONTENT = {
    tarotsStoryContent: `
Hành trình của Kẻ Khờ (The Fool) qua 22 lá bài Ẩn Chính là câu chuyện ngụ ngôn trung tâm của Tarot. Nó tượng trưng cho hành trình của mỗi chúng ta trong cuộc đời, từ sự ngây thơ ban đầu đến sự khai sáng và hoàn thiện.
Hãy bước vào cuộc hành trình này để cùng nhau chiêm nghiệm nhé!!!
Câu chuyện bắt đầu với lá bài không đánh số, hoặc mang số 0: The Fool (Kẻ Khờ). Chàng là hiện thân của tâm hồn thuần khiết, của tiềm năng vô hạn. The Fool đứng trên một vách đá, mắt ngước nhìn lên bầu trời đầy mơ mộng, không hề để ý đến vực thẳm ngay dưới chân. Chàng không mang gì nhiều ngoài một túi hành lý nhỏ trên cây gậy – tượng trưng cho những kinh nghiệm ít ỏi của mình. Chú chó nhỏ bên cạnh vừa cố gắng cảnh báo, vừa vui mừng đồng hành. The Fool không ngốc, chàng chỉ đơn giản là chưa bị ràng buộc bởi những định kiến và nỗi sợ hãi của thế giới. Với một niềm tin ngây thơ, chàng tung tăng bước chân đầu tiên vào cuộc hành trình vĩ đại của cuộc đời.

Giai Đoạn 1: Thế Giới Vật Chất và Những Người Thầy Đầu Tiên

1. The Magician (Pháp Sư): Ngay khi bước vào thế giới, The Fool gặp gỡ Pháp Sư. Ngài chỉ cho chàng thấy mình không hề tay trắng. Trên bàn trước mặt là bốn món bảo vật – Gậy, Cốc, Kiếm và Tiền – tượng trưng cho ý chí, tình cảm, lý trí và vật chất. Pháp Sư dạy chàng rằng: "Con có đủ mọi công cụ để tạo nên thực tại của riêng mình. Sức mạnh đã ở sẵn trong con, chỉ cần con biết cách sử dụng nó." The Fool học được bài học đầu tiên về sức mạnh ý chí và sự biểu hiện.

2. The High Priestess (Nữ Tu): Rời xa Pháp Sư, chàng bị thu hút bởi sự tĩnh lặng của ngôi đền nơi Nữ Tu ngự trị. Bà ngồi giữa hai cột trụ Trắng và Đen, đại diện cho những mặt đối lập. Bà không nói nhiều, mà dạy The Fool cách lắng nghe tiếng nói từ bên trong, từ trực giác và thế giới tiềm thức. Bà là người giữ chìa khóa của những bí mật chưa được khám phá.

3. The Empress (Nữ Hoàng): The Fool bước vào một khu vườn trù phú, tràn ngập sức sống và gặp gỡ Nữ Hoàng. Bà là hiện thân của Mẹ Thiên Nhiên, của sự sáng tạo, nuôi dưỡng và sung túc. Qua bà, chàng học được cách tận hưởng vẻ đẹp của thế giới giác quan, về tình yêu thương vô điều kiện và sự màu mỡ của cuộc sống.

4. The Emperor (Hoàng Đế): Để tạo ra điều gì đó bền vững, The Fool cần đến trật tự và kỷ luật. Chàng gặp Hoàng Đế, một người cha nghiêm nghị, người cai trị vương quốc của mình bằng lý trí và luật lệ. Ngài dạy cho The Fool về tầm quan trọng của cấu trúc, sự ổn định, quyền lực và trách nhiệm.

5. The Hierophant (Giáo Hoàng): The Fool tìm kiếm sự hiểu biết sâu sắc hơn về đức tin và truyền thống. Chàng tìm đến Giáo Hoàng, người thầy của những giáo lý và hệ thống niềm tin được công nhận. Tại đây, chàng học về giá trị của việc trở thành một phần của cộng đồng, về các quy tắc và nghi lễ đã được truyền lại qua nhiều thế hệ.

Giai Đoạn 2: Những Thử Thách Của Trái Tim và Xã Hội

6. The Lovers (Người Yêu): Lần đầu tiên, The Fool đứng trước một ngã ba đường quan trọng. Lá bài Người Yêu không chỉ nói về tình yêu đôi lứa, mà còn là một lựa chọn lớn lao về giá trị sống. Chàng phải quyết định điều gì thực sự quan trọng với mình, lắng nghe con tim để tạo ra một sự kết hợp hài hòa giữa các mặt đối lập trong chính con người mình.

7. The Chariot (Cỗ Xe): Sau khi đã đưa ra lựa chọn, The Fool phải hành động. Chàng bước lên Cỗ Xe, nắm lấy dây cương. Hai con nhân sư một đen một trắng kéo cỗ xe theo hai hướng ngược nhau, tượng trưng cho những xung đột nội tâm và ngoại cảnh. Bằng ý chí và sự tập trung cao độ, chàng học cách điều khiển những thế lực đối lập này để tiến về phía trước một cách quyết đoán và giành lấy chiến thắng đầu tiên.

8. Strength (Sức Mạnh): Trên đường đi, The Fool gặp một người phụ nữ đang nhẹ nhàng thuần hóa một con sư tử hung dữ. Đây là Sức Mạnh. Chàng nhận ra sức mạnh thực sự không đến từ cơ bắp hay sự thống trị, mà đến từ lòng dũng cảm, sự kiên nhẫn và lòng trắc ẩn. Chàng học cách kiểm soát bản năng và đam mê của mình bằng sự dịu dàng thay vì bạo lực.

9. The Hermit (Ẩn Sĩ): Sau những thành công và ồn ào bên ngoài, The Fool cảm thấy cần một khoảng lặng. Chàng theo chân Ẩn Sĩ leo lên một ngọn núi tuyết, xa lánh thế giới. Vị Ẩn Sĩ cầm một ngọn đèn chứa ngôi sao sáng, dạy chàng rằng câu trả lời cho những câu hỏi lớn nhất nằm ở bên trong. Đây là thời gian để The Fool tự soi chiếu, tìm kiếm trí tuệ nội tâm.

Giai Đoạn 3: Vòng Xoáy Của Số Phận và Sự Biến Đổi

10. Wheel of Fortune (Bánh Xe Số Phận): Khi trở lại với thế giới, The Fool nhìn thấy một Bánh Xe Số Phận khổng lồ đang quay. Chàng nhận ra rằng cuộc sống luôn thay đổi, có lúc lên, lúc xuống. Chàng học được bài học về sự vô thường, về định mệnh và về việc chấp nhận những thay đổi bất ngờ của cuộc đời.

11. Justice (Công Lý): Mọi hành động đều có kết quả. The Fool đối mặt với Công Lý, người cầm một thanh kiếm và một chiếc cân. Chàng học về luật nhân quả, về sự thật và sự công bằng. Chàng phải chịu trách nhiệm cho những lựa chọn của mình và hiểu rằng sự cân bằng sẽ luôn được thiết lập lại.

12. The Hanged Man (Người Treo Ngược): The Fool gặp phải một trở ngại lớn không thể vượt qua. Chàng bị treo ngược chân lên một cành cây, nhưng gương mặt lại rất bình thản. Đây là Người Treo Ngược. Chàng học được rằng đôi khi, cách tốt nhất để tiến lên là dừng lại, buông bỏ sự kiểm soát và nhìn thế giới từ một góc độ hoàn toàn mới. Đây là sự hy sinh tự nguyện để có được một tuệ giác sâu sắc hơn.

13. Death (Cái Chết): Sự đình trệ không thể kéo dài mãi. Lá bài Cái Chết xuất hiện, không phải là sự kết thúc vật lý, mà là một sự chuyển hóa mạnh mẽ. The Fool phải từ bỏ con người cũ, những thói quen, những mối quan hệ không còn phù hợp. Đó là một sự kết thúc đau đớn nhưng cần thiết để mở đường cho một sự tái sinh.

14. Temperance (Sự Điều Độ): Sau sự hủy diệt của Cái Chết, The Fool học cách hàn gắn và tìm lại sự cân bằng. Chàng gặp thiên thần của Sự Điều Độ, người đang rót nước qua lại giữa hai chiếc cốc một cách hoàn hảo. Chàng học cách kết hợp các mặt đối lập trong mình – lý trí và cảm xúc, nội tâm và ngoại cảnh – để tạo ra một dòng chảy hài hòa, một sự tổng hòa tuyệt đẹp.

Giai Đoạn 4: Bóng Tối, Sự Giác Ngộ và Hoàn Thiện

15. The Devil (Ác Quỷ): Trước khi đạt đến ánh sáng, The Fool phải đối mặt với bóng tối sâu thẳm nhất của mình. Chàng bị cám dỗ bởi Ác Quỷ, kẻ tượng trưng cho sự trói buộc, nghiện ngập, chủ nghĩa vật chất và những niềm tin giới hạn. Sợi dây xích quanh cổ chàng và người đồng hành thực ra rất lỏng lẻo. Chàng nhận ra rằng xiềng xích lớn nhất chính là do mình tự tạo ra, và chàng có sức mạnh để phá vỡ nó.

16. The Tower (Ngọn Tháp): Ngay khi The Fool nhận ra sự thật, một tia sét đánh xuống Ngọn Tháp kiên cố mà chàng đã tự xây dựng nên từ cái tôi và những niềm tin sai lầm. Mọi thứ sụp đổ. Đó là một khoảnh khắc của sự thật phũ phàng, đột ngột và hỗn loạn. Nhưng qua đống tro tàn, chàng lần đầu tiên nhìn thấy bầu trời trong xanh không bị che khuất.

17. The Star (Ngôi Sao): Sau cơn bão, màn đêm buông xuống và The Fool nhìn thấy Ngôi Sao hy vọng lấp lánh trên bầu trời. Một người phụ nữ trần trụi đang đổ nước xuống đất và hồ, tượng trưng cho sự chữa lành, niềm tin và cảm hứng. The Fool cảm thấy được gột rửa mọi khổ đau và tìm lại được niềm tin vào vũ trụ và tương lai.

18. The Moon (Mặt Trăng): Con đường phía trước vẫn còn mờ ảo. The Fool bước vào vùng đất của Mặt Trăng, nơi ánh sáng không rõ ràng. Nỗi sợ hãi, ảo ảnh và những ký ức từ tiềm thức trỗi dậy. Chàng phải đi qua vùng nước sâu của tâm trí, đối mặt với những gì không chắc chắn và tin vào trực giác để vượt qua.

19. The Sun (Mặt Trời): Cuối cùng, The Fool bước ra khỏi bóng đêm và được chào đón bởi ánh sáng rực rỡ của Mặt Trời. Mọi thứ trở nên rõ ràng, vui vẻ và đầy sức sống. Một đứa trẻ hồn nhiên cưỡi trên con ngựa trắng, tượng trưng cho sự lạc quan và thành công. Chàng tìm thấy sự thật, sự minh mẫn và niềm vui thuần khiết.

20. Judgement (Sự Phán Xét): Một tiếng kèn vang lên từ thiên đường. Đây là Sự Phán Xét. The Fool nhìn lại toàn bộ hành trình của mình, không phải để phán xét, mà để tha thứ và chấp nhận. Chàng đã được tái sinh, rũ bỏ con người cũ để trỗi dậy thành một phiên bản cao hơn, chân thật hơn của chính mình. Chàng đã trả lời được tiếng gọi của tâm hồn.

21. The World (Thế Giới): Cuối cùng, The Fool đã đi hết vòng tròn. Chàng chính là hình bóng đang nhảy múa ở trung tâm của lá bài Thế Giới. Chàng đã hợp nhất tất cả các bài học, dung hòa mọi mặt đối lập và đạt đến trạng thái hoàn thiện, viên mãn. Chàng không còn là Kẻ Khờ ngây thơ ở vách đá, mà là một linh hồn đã giác ngộ, nhảy múa trong sự hòa hợp tuyệt đối với vũ trụ.

Hành trình đã kết thúc, nhưng vòng tròn cũng đã hoàn thành. Giờ đây, The Fool, với tất cả sự thông thái đã tích lũy, lại sẵn sàng bước vào một hành trình mới, một vòng lặp mới ở một cấp độ cao hơn. Bởi vì cuộc sống, cũng như Tarot, là một chuỗi những hành trình không bao giờ kết thúc.`,
    historyOfTarotContent: `
Tarot có một lịch sử phong phú và hấp dẫn kéo dài hàng thế kỷ. Trái với suy nghĩ của nhiều người, nguồn gốc của nó không phải để bói toán mà là một trò chơi giải trí.

Nguồn Gốc của các lá bài Tarot bắt đầu Ở Ý (Thế kỷ 15)
Những lá bài Tarot đầu tiên xuất hiện ở miền bắc nước Ý vào đầu thế kỷ 15. Các gia đình quý tộc như Visconti-Sforza đã đặt làm những bộ bài được vẽ thủ công tinh xảo để chơi một trò chơi gọi là "Trionfi" (chiến thắng), sau này được gọi là "Tarocchi". Bộ bài lúc này gồm các lá bài có hình ảnh ẩn dụ, đại diện cho các vị thần, đức tính và các yếu tố của thế giới, bên cạnh các bộ thông thường. Các bộ bài Tarot cổ nhất còn tồn tại đến nay là Visconti - Sforza, được vẽ thủ công, dát vàng, và thể hiện phong cách hội họa Phục Hưng.

Sự Chuyển Đổi Sang Thuyết Thần Bí (Thế kỷ 18)
Mãi đến cuối thế kỷ 18 ở Pháp, Tarot mới bắt đầu được liên kết với việc bói toán và huyền bí. Nhà văn người Pháp Antoine Court de Gébelin đã tuyên bố trong tác phẩm "Le Monde Primitif" rằng Tarot thực chất là một cuốn sách Ai Cập cổ đại chứa đựng những kiến thức bí truyền của Thoth. Mặc dù giả thuyết này đã bị bác bỏ về mặt lịch sử, nó đã khơi dậy sự quan tâm lớn đến khía cạnh thần bí của Tarot.

Ngay sau đó, nhà huyền bí học người Pháp Jean-Baptiste Alliette, bút danh "Etteilla", đã đi tiên phong trong việc phổ biến Tarot để bói toán. Ông đã gán ý nghĩa bói toán cho từng lá bài, kết nối chúng với chiêm tinh học và bốn nguyên tố, và xuất bản bộ bài đầu tiên được thiết kế riêng cho mục đích này.

Sự Phát Triển Của Thuyết Thần Bí (Thế kỷ 19)
Vào thế kỷ 19, nhà huyền bí học người Pháp Eliphas Lévi đã kết nối Tarot với Kabbalah, cho rằng 22 lá Ẩn Chính tương ứng với 22 chữ cái trong bảng chữ cái Hebrew. Điều này đã tạo ra một nền tảng triết học sâu sắc hơn cho Tarot.

Tư tưởng này đã được phát triển thêm bởi các hội kín, nổi bật nhất là "Hội Bình Minh Vàng (Hermetic Order of the Golden Dawn)" ở Anh. Họ đã hệ thống hóa các mối tương quan giữa Tarot, chiêm tinh học, số học và Kabbalah, tạo ra một hệ thống phức tạp vẫn còn ảnh hưởng đến Tarot hiện đại.

Bộ Bài Rider-Waite-Smith (Thế kỷ 20)
Bộ bài Tarot được biết đến rộng rãi nhất ngày nay, bộ Rider-Waite-Smith, được xuất bản vào năm 1909. Được hình thành bởi Arthur Edward Waite, một thành viên của Hội Bình Minh Vàng, và được minh họa một cách xuất sắc bởi nghệ sĩ Pamela Colman Smith. Điểm cách mạng của bộ bài này là nó lần đầu tiên có hình ảnh minh họa đầy đủ cho tất cả 56 lá Ẩn Phụ, thay vì chỉ là các biểu tượng của bộ (ví dụ: 7 cây kiếm thay vì lá Bảy Kiếm). Điều này làm cho ý nghĩa của các lá bài trở nên trực quan và dễ tiếp cận hơn rất nhiều, mở đường cho sự bùng nổ của Tarot trong thế kỷ 20.

Ngày nay, Tarot đã phát triển từ một trò chơi trong cung đình thành một công cụ mạnh mẽ để khám phá nội tâm, thiền định và tìm kiếm sự thông thái.`,
    aboutTheCardsContent: `
Một bộ bài Tarot tiêu chuẩn gồm 78 lá, được chia thành hai phần chính: Bộ Ẩn Chính (Major Arcana) và Bộ Ẩn Phụ (Minor Arcana). Hiểu rõ cấu trúc này là chìa khóa để giải mã những thông điệp mà các lá bài mang lại.

1. Bộ Ẩn Chính (Major Arcana)
Số lượng: Gồm 22 lá bài, được đánh số từ 0 (The Fool) đến XXI (The World).
Ý nghĩa: Những lá bài này đại diện cho các sự kiện, bài học tâm linh và những cột mốc quan trọng trong cuộc đời. Chúng mang những thông điệp mạnh mẽ, sâu sắc về hành trình của con người. Toàn bộ Bộ Ẩn Chính có thể được xem như "Hành trình của Chàng Khờ" (The Fool's Journey), kể về câu chuyện của một linh hồn từ lúc ngây thơ, bắt đầu cuộc phiêu lưu cho đến khi đạt được sự giác ngộ và hoàn thiện. Khi một lá Ẩn Chính xuất hiện trong một lần trải bài, nó thường chỉ ra rằng các sự kiện hiện tại đang có ảnh hưởng lớn đến cuộc sống của bạn.

2. Bộ Ẩn Phụ (Minor Arcana)
Số lượng: Gồm 56 lá bài, được chia thành bốn bộ (suits), tương tự như bộ bài Tây thông thường.
Ý nghĩa: Những lá bài này phản ánh các vấn đề, tình huống và cảm xúc hàng ngày. Chúng cung cấp chi tiết và bối cảnh cho những thông điệp lớn hơn từ Bộ Ẩn Chính. Mỗi bộ trong Ẩn Phụ gồm 14 lá: mười lá số (Át đến Mười) và bốn lá Hoàng Gia (Tiểu Bồi, Hiệp Sĩ, Hoàng Hậu, Vua).

Bốn Bộ Của Ẩn Phụ (The Four Suits)
Mỗi bộ được liên kết với một nguyên tố và một khía cạnh cụ thể của cuộc sống:
*   Bộ Gậy (Wands) - Lửa: Tượng trưng cho năng lượng, đam mê, sự sáng tạo, tham vọng và ý chí. Các lá bài Gậy thường liên quan đến sự nghiệp, dự án cá nhân và nguồn cảm hứng.
*   Bộ Cốc (Cups) - Nước: Tượng trưng cho cảm xúc, tình yêu, các mối quan hệ, trực giác và thế giới nội tâm. Các lá bài Cốc khám phá chiều sâu của trái tim và các mối liên kết con người.
*   Bộ Kiếm (Swords) - Khí: Tượng trưng cho suy nghĩ, tư duy logic, thử thách, xung đột và sự thật. Các lá bài Kiếm đại diện cho sức mạnh của trí tuệ, nhưng cũng có thể chỉ ra sự căng thẳng, lo lắng và những quyết định khó khăn.
*   Bộ Tiền (Pentacles) - Đất: Tượng trưng cho thế giới vật chất, tài chính, công việc, sức khỏe và sự ổn định. Các lá bài Tiền kết nối chúng ta với những khía cạnh hữu hình của cuộc sống.

Các Lá Bài Hoàng Gia (Court Cards)
Mỗi bộ đều có bốn lá Hoàng Gia: Tiểu Bồi (Page), Hiệp Sĩ (Knight), Hoàng Hậu (Queen) và Vua (King). Những lá bài này có thể đại diện cho:
*   Những người cụ thể trong cuộc sống của bạn.
*   Các khía cạnh tính cách của bạn hoặc của người khác.
*   Mức độ trưởng thành liên quan đến nguyên tố của bộ đó. (Ví dụ: Page of Wands là sự khởi đầu của một đam mê, trong khi King of Wands là sự làm chủ hoàn toàn năng lượng sáng tạo).`,
    typesOfSpreadsContent: `
Trải bài Tarot là cách sắp xếp các lá bài theo một bố cục cụ thể. Mỗi vị trí trong trải bài đại diện cho một khía cạnh khác nhau của câu hỏi hoặc tình huống, tạo thành một câu chuyện hoàn chỉnh. Dưới đây là một số loại trải bài phổ biến, từ đơn giản đến phức tạp.

1. Trải bài Một Lá (Single-Card Pull)
*   Cấu trúc: Đơn giản nhất, chỉ rút một lá bài.
*   Mục đích:
       Hướng dẫn hàng ngày: Rút một lá vào buổi sáng để nhận thông điệp hoặc chủ đề cho ngày hôm đó.
       Câu trả lời nhanh: Tìm kiếm một câu trả lời ngắn gọn cho một câu hỏi đơn giản, không đòi hỏi phân tích sâu.
       Làm rõ: Rút thêm một lá để làm rõ ý nghĩa của một lá bài khác trong một trải bài lớn hơn.
*   Phù hợp nhất cho: Thiền định nhanh, tập trung năng lượng, hoặc khi bạn cần một tia sáng trí tuệ tức thì.

2. Trải bài Ba Lá (Three-Card Spread)
*   Cấu trúc: Trải bài linh hoạt và phổ biến nhất, chỉ gồm ba lá bài được đặt thành một hàng.
*   Các cách diễn giải phổ biến:
       Quá khứ / Hiện tại / Tương lai: Cái nhìn tổng quan về dòng thời gian của một sự việc.
       Tình huống / Hành động / Kết quả: Phân tích một vấn đề và hướng giải quyết.
       Tâm trí / Cơ thể / Tinh thần: Kiểm tra trạng thái toàn diện của bản thân.
       Bạn / Người khác / Mối quan hệ: Khám phá động lực giữa hai người.
       Điểm mạnh / Điểm yếu / Lời khuyên: Đánh giá một tình huống để tìm ra lời khuyên tốt nhất.
*   Phù hợp nhất cho: Các câu hỏi đơn giản, kiểm tra nhanh tình hình, hoặc khi cần một lời khuyên rõ ràng, súc tích.

3. Trải bài Năm Lá - Chữ Thập Đơn Giản (Five-Card 'Simple Cross' Spread)
*   Cấu trúc: Một trải bài cung cấp nhiều chi tiết hơn trải bài ba lá, rất tốt để giải quyết vấn đề. Bốn lá bài xếp thành hình vuông (hoặc kim cương) và lá thứ năm ở giữa.
*   Ý nghĩa các vị trí:
    1.  Quá khứ (Bên trái): Những sự kiện trong quá khứ ảnh hưởng đến tình hình hiện tại.
    2.  Hiện tại (Bên phải): Tình hình hiện tại.
    3.  Tương lai (Bên trên): Điều có khả năng xảy ra tiếp theo.
    4.  Nền tảng của vấn đề (Bên dưới): Nguyên nhân gốc rễ hoặc vấn đề tiềm ẩn.
    5.  Lời khuyên / Kết quả tiềm năng (Ở giữa): Tổng hợp các lá bài kia và đưa ra lời khuyên hoặc kết quả có thể xảy ra.
*   Phù hợp nhất cho: Hiểu rõ hơn về một vấn đề cụ thể và các yếu tố xung quanh nó.

4. Trải bài Móng Ngựa (Horseshoe Spread)
*   Cấu trúc: Một trải bài bảy lá được sắp xếp theo hình móng ngựa. Cung cấp một cái nhìn tổng quan chi tiết về một vấn đề.
*   Ý nghĩa các vị trí:
    1.  Quá khứ: Ảnh hưởng của quá khứ đến tình hình hiện tại.
    2.  Hiện tại: Tình hình hiện tại và cảm nhận của bạn.
    3.  Tương lai gần: Những gì sẽ xảy ra trong tương lai gần.
    4.  Lời khuyên: Hướng đi tốt nhất cho bạn.
    5.  Môi trường: Ảnh hưởng của những người xung quanh.
    6.  Trở ngại: Thách thức bạn cần phải vượt qua.
    7.  Kết quả: Kết quả cuối cùng nếu bạn làm theo lời khuyên.
*   Phù hợp nhất cho: Phân tích một vấn đề cụ thể và tìm kiếm lời khuyên rõ ràng về các bước tiếp theo.

5. Trải bài Chữ Thập Celtic (Celtic Cross Spread)
*   Cấu trúc: Một trải bài mười lá phức tạp, là một trong những trải bài chi tiết và toàn diện nhất. Nó cung cấp một cái nhìn sâu sắc và đa chiều về một vấn đề.
*   Ý nghĩa các vị trí (một trong những cách phổ biến nhất):
    1.  Trái tim của vấn đề: Tình hình hiện tại, cốt lõi của câu hỏi.
    2.  Thử thách: Chướng ngại vật hoặc xung đột trước mắt.
    3.  Nền tảng (Bên dưới): Quá khứ xa, những sự kiện đã định hình nên tình hình hiện tại.
    4.  Quá khứ gần đây (Phía sau): Những sự kiện vừa xảy ra.
    5.  Mục tiêu / Tiềm năng (Bên trên): Kết quả tốt nhất có thể đạt được hoặc mục tiêu cần hướng tới.
    6.  Tương lai gần (Phía trước): Điều sắp xảy ra.
    7.  Quan điểm của bạn: Thái độ, suy nghĩ và cảm xúc của bạn về vấn đề.
    8.  Môi trường bên ngoài: Ảnh hưởng từ người khác, hoàn cảnh xung quanh.
    9.  Hy vọng và Sợ hãi: Điều bạn mong muốn và lo sợ nhất.
    10. Kết quả cuối cùng: Kết quả có khả năng xảy ra nhất nếu mọi việc tiếp diễn như hiện tại.
*   Phù hợp nhất cho: Các câu hỏi quan trọng, phức tạp đòi hỏi một phân tích chi tiết.

Lưu ý: Các ý nghĩa của vị trí trong trải bài có thể thay đổi tùy theo người đọc và truyền thống. Đây là những diễn giải phổ biến, nhưng bạn luôn có thể điều chỉnh chúng cho phù hợp với trực giác của mình. Nguồn tham khảo chính cho các trải bài này là từ các tài liệu kinh điển về Tarot như sách của A. E. Waite và các tác giả hiện đại như Rachel Pollack và Mary K. Greer.*
`
};

const ENGLISH_CONTENT = {
    tarotsStoryContent: `
The Fool's Journey through the 22 Major Arcana cards is the central allegory of the Tarot. It symbolizes each of our journeys through life, from initial innocence to enlightenment and completion.
Let's embark on this journey to contemplate together!!!
The story begins with the unnumbered, or zero, card: The Fool. He is the embodiment of a pure soul, of limitless potential. The Fool stands on a cliff's edge, eyes gazing up at a dreamy sky, oblivious to the abyss at his feet. He carries little more than a small bag on a stick – representing his scant experience. His little dog is both trying to warn him and joyfully accompanying him. The Fool is not foolish; he is simply unbound by the world's preconceptions and fears. With naive faith, he takes his first buoyant step into the great journey of life.

Phase 1: The Material World and First Teachers

1. The Magician: Upon entering the world, The Fool meets The Magician. He shows The Fool that he is not empty-handed. On the table before him are four treasures – a Wand, a Cup, a Sword, and a Pentacle – symbolizing will, emotion, intellect, and the material world. The Magician teaches him: "You have all the tools you need to create your own reality. The power is already within you; you just need to know how to use it." The Fool learns his first lesson about willpower and manifestation.

2. The High Priestess: Leaving The Magician, he is drawn to the quiet of the temple where The High Priestess resides. She sits between two pillars, one black and one white, representing dualities. She does not speak much, but teaches The Fool to listen to the voice within, to his intuition and the subconscious world. She is the keeper of the keys to undiscovered secrets.

3. The Empress: The Fool enters a lush, vibrant garden and meets The Empress. She is the embodiment of Mother Nature, of creation, nurturing, and abundance. Through her, he learns to enjoy the beauty of the sensory world, about unconditional love and the fruitfulness of life.

4. The Emperor: To create something lasting, The Fool needs order and discipline. He meets The Emperor, a stern father figure who rules his kingdom with reason and law. He teaches The Fool the importance of structure, stability, authority, and responsibility.

5. The Hierophant: The Fool seeks a deeper understanding of faith and tradition. He comes to The Hierophant, the teacher of established doctrines and belief systems. Here, he learns the value of being part of a community, of the rules and rituals passed down through generations.

Phase 2: The Trials of the Heart and Society

6. The Lovers: For the first time, The Fool stands at a crucial crossroads. The Lovers card speaks not only of romantic love but also of a significant choice about his values. He must decide what is truly important to him, listening to his heart to create a harmonious union of the opposites within himself.

7. The Chariot: Having made his choice, The Fool must act. He steps into The Chariot and takes the reins. Two sphinxes, one black and one white, pull in opposite directions, symbolizing internal and external conflicts. Through sheer will and focus, he learns to control these opposing forces to move forward decisively and claim his first victory.

8. Strength: On his path, The Fool meets a woman gently taming a fierce lion. This is Strength. He realizes that true strength comes not from brute force or domination, but from courage, patience, and compassion. He learns to master his own instincts and passions with gentleness rather than violence.

9. The Hermit: After his external successes and the noise of the world, The Fool feels the need for solitude. He follows The Hermit up a snowy mountain, away from society. The Hermit holds a lantern containing a shining star, teaching him that the answers to the greatest questions lie within. This is a time for The Fool to look inward and seek his inner wisdom.

Phase 3: The Turning of Fate and Transformation

10. Wheel of Fortune: Returning to the world, The Fool sees a giant Wheel of Fortune spinning. He realizes that life is ever-changing, with its ups and downs. He learns the lesson of impermanence, of destiny, and of accepting life's unexpected turns.

11. Justice: Every action has a consequence. The Fool confronts Justice, who holds a sword and scales. He learns about cause and effect, truth, and fairness. He must take responsibility for his choices and understand that balance will always be restored.

12. The Hanged Man: The Fool encounters an insurmountable obstacle. He finds himself hanging upside down by one foot from a tree, yet his face is serene. This is The Hanged Man. He learns that sometimes, the best way forward is to stop, surrender control, and see the world from a completely new perspective. It is a voluntary sacrifice to gain a deeper wisdom.

13. Death: Stagnation cannot last forever. The Death card appears, not as a physical end, but as a powerful transformation. The Fool must shed his old self, habits, and relationships that no longer serve him. It is a painful but necessary ending to make way for a rebirth.

14. Temperance: After the destruction of Death, The Fool learns to heal and find balance again. He meets the angel of Temperance, who is perfectly pouring water between two cups. He learns to integrate the opposites within him – reason and emotion, the inner and outer worlds – to create a harmonious flow, a beautiful synthesis.

Phase 4: The Darkness, Enlightenment, and Completion

15. The Devil: Before reaching the light, The Fool must confront his deepest shadow. He is tempted by The Devil, who represents bondage, addiction, materialism, and limiting beliefs. The chains around his and his companion's necks are actually loose. He realizes that the greatest chains are self-imposed, and he has the power to break them.

16. The Tower: As soon as The Fool realizes this truth, a bolt of lightning strikes The Tower he has built for himself out of ego and false beliefs. Everything comes crashing down. It is a moment of sudden, chaotic, and humbling truth. But through the rubble, he sees the clear, unobstructed sky for the first time.

17. The Star: After the storm, night falls, and The Fool sees the hopeful Star twinkling in the sky. A naked woman pours water onto the land and into a pool, symbolizing healing, faith, and inspiration. The Fool feels cleansed of his suffering and finds renewed faith in the universe and the future.

18. The Moon: The path ahead is still murky. The Fool enters the landscape of The Moon, where the light is unclear. Fears, illusions, and subconscious memories rise to the surface. He must navigate the deep waters of his mind, face uncertainty, and trust his intuition to get through.

19. The Sun: Finally, The Fool emerges from the darkness and is greeted by the brilliant light of The Sun. Everything becomes clear, joyful, and vibrant. A naked child rides a white horse, symbolizing optimism and success. He finds truth, clarity, and pure joy.

20. Judgement: A trumpet call sounds from the heavens. This is Judgement. The Fool looks back on his entire journey, not to judge, but to forgive and accept. He is reborn, shedding his old self to rise as a higher, more authentic version of himself. He has answered his soul's calling.

21. The World: At last, The Fool has come full circle. He is the dancing figure in the center of The World card. He has integrated all the lessons, harmonized all opposites, and reached a state of completion and fulfillment. He is no longer the naive Fool on the cliff, but an enlightened soul, dancing in perfect harmony with the universe.

The journey is over, but the circle is complete. Now The Fool, with all his accumulated wisdom, is ready to step onto a new path, a new cycle at a higher level. Because life, like the Tarot, is a series of never-ending journeys.`,
    historyOfTarotContent: `
Tarot has a rich and fascinating history that spans centuries. Contrary to popular belief, its origins were not in divination, but in games.

**Italian Origins (15th Century)**
The first Tarot cards appeared in northern Italy in the early 15th century. Noble families like the Visconti-Sforza commissioned exquisite, hand-painted decks to play a game called "Trionfi" (triumphs), later known as "Tarocchi." The deck at this time consisted of allegorical trump cards, representing gods, virtues, and elements of the world, alongside the standard suits.

**The Shift to Mysticism (18th Century)**
It wasn't until the late 18th century in France that Tarot began to be associated with divination and the occult. French author Antoine Court de Gébelin claimed in his work "Le Monde Primitif" that the Tarot was actually an ancient Egyptian book of esoteric wisdom from Thoth. While this theory has been historically disproven, it sparked immense interest in the mystical side of Tarot.

Shortly after, the French occultist Jean-Baptiste Alliette, writing under the pseudonym **Etteilla**, pioneered the popularization of Tarot for divination. He assigned divinatory meanings to each card, connected them to astrology and the four elements, and published the first deck designed specifically for this purpose.

**Occult Development (19th Century)**
In the 19th century, French occultist Eliphas Lévi linked the Tarot to Kabbalah, positing that the 22 Major Arcana cards corresponded to the 22 letters of the Hebrew alphabet. This created a deeper philosophical framework for the Tarot.

These ideas were further developed by secret societies, most notably the **Hermetic Order of the Golden Dawn** in England. They systemized the correlations between Tarot, astrology, numerology, and Kabbalah, creating a complex system that still influences modern Tarot.

**The Rider-Waite-Smith Deck (20th Century)**
The most widely known Tarot deck today, the Rider-Waite-Smith deck, was published in 1909. Conceived by Arthur Edward Waite, a member of the Golden Dawn, and brilliantly illustrated by artist **Pamela Colman Smith**. The revolutionary aspect of this deck was that it was the first to feature fully illustrated scenes for all 56 Minor Arcana cards, instead of just the suit symbols (e.g., 7 literal swords for the Seven of Swords). This made the meanings of the cards much more intuitive and accessible, paving the way for the Tarot boom of the 20th century.

Today, Tarot has evolved from a courtly game into a powerful tool for introspection, meditation, and seeking wisdom.`,
    aboutTheCardsContent: `
A standard Tarot deck consists of 78 cards, divided into two main parts: the Major Arcana and the Minor Arcana. Understanding this structure is key to deciphering the messages the cards convey.

**1. The Major Arcana**
*   **Composition:** Consists of 22 cards, numbered from 0 (The Fool) to XXI (The World).
*   **Meaning:** These cards represent significant life events, spiritual lessons, and major milestones. They carry powerful, profound messages about the human journey. The entire Major Arcana can be seen as "The Fool's Journey," telling the story of a soul from its innocent beginnings, through adventures and trials, to its ultimate enlightenment and completion. When a Major Arcana card appears in a reading, it often indicates that current events are having a major impact on your life.

**2. The Minor Arcana**
*   **Composition:** Consists of 56 cards, divided into four suits, similar to a regular deck of playing cards.
*   **Meaning:** These cards reflect the day-to-day issues, situations, and emotions. They provide detail and context to the larger messages from the Major Arcana. Each suit in the Minor Arcana contains 14 cards: ten numbered cards (Ace to Ten) and four Court Cards (Page, Knight, Queen, King).

**The Four Suits of the Minor Arcana**
Each suit is associated with a classical element and a specific facet of life:
*   **Wands - Fire:** Represents energy, passion, creativity, ambition, and willpower. Wands cards often relate to careers, personal projects, and inspiration.
*   **Cups - Water:** Represents emotions, love, relationships, intuition, and the inner world. Cups cards explore the depths of the heart and human connections.
*   **Swords - Air:** Represents thoughts, logical thinking, challenges, conflict, and truth. Swords cards represent the power of the intellect, but can also indicate stress, anxiety, and difficult decisions.
*   **Pentacles - Earth:** Represents the material world, finances, work, health, and stability. Pentacles cards connect us to the tangible aspects of life.

**The Court Cards**
Each suit has four Court Cards: Page, Knight, Queen, and King. These cards can represent:
*   **Specific people** in your life.
*   **Aspects of your personality** or that of others.
*   **A level of maturity** related to the element of that suit. (For example, the Page of Wands is the initial spark of a passion, while the King of Wands is the complete mastery of creative energy).`,
    typesOfSpreadsContent: `
A Tarot spread is a specific arrangement of cards in a layout. Each position in the spread represents a different aspect of the question or situation, forming a complete narrative. Here are some of the most common spreads, from simple to complex.

**1. Single-Card Pull**
*   **Layout:** The simplest of all, involving just one card.
*   **Purpose:**
    *   **Daily Guidance:** Drawing a card in the morning to receive a message or theme for the day.
    *   **Quick Answer:** Seeking a concise answer to a simple, non-critical question.
    *   **Clarification:** Drawing an extra card to clarify the meaning of another card in a larger spread.
*   **Best for:** Quick meditations, setting an intention, or when you need a single spark of immediate insight.

**2. Three-Card Spread**
*   **Layout:** The most versatile and popular spread, consisting of just three cards laid in a row.
*   **Common Interpretations:**
    *   **Past / Present / Future:** A general overview of the timeline of a situation.
    *   **Situation / Action / Outcome:** Analyzes a problem and a potential course of action.
    *   **Mind / Body / Spirit:** A holistic check-in on your personal state.
    *   **You / The Other Person / The Relationship:** Explores the dynamics between two people.
    *   **Strengths / Weaknesses / Advice:** Assesses a situation to find the best counsel.
*   **Best for:** Simple questions, quick check-ins, or when you need clear, concise advice.

**3. Five-Card 'Simple Cross' Spread**
*   **Layout:** A spread that offers more detail than a three-card reading, excellent for problem-solving. Four cards are arranged in a cross/diamond shape with a fifth in the center.
*   **Positional Meanings:**
    1.  **The Past (Left):** Past events influencing the present situation.
    2.  **The Present (Right):** The situation as it stands now.
    3.  **The Future (Top):** What is likely to happen next.
    4.  **The Foundation of the Matter (Bottom):** The root cause or underlying issue.
    5.  **Advice / Potential Outcome (Center):** Synthesizes the other cards and offers guidance or a likely result.
*   **Best for:** Gaining a deeper understanding of a specific problem and the factors surrounding it.

**4. Horseshoe Spread**
*   **Layout:** A seven-card spread arranged in the shape of a horseshoe. It provides a detailed overview of an issue.
*   **Positional Meanings:**
    1.  **The Past:** How past events influence the present situation.
    2.  **The Present:** The current situation and your feelings about it.
    3.  **The Near Future:** What will happen in the near future.
    4.  **The Advice:** The best course of action for you to take.
    5.  **The Environment:** The influence of those around you.
    6.  **Obstacles:** Challenges you need to overcome.
    7.  **The Outcome:** The final result if you follow the advice.
*   **Best for:** Analyzing a specific problem and seeking clear advice on the next steps.

**5. Celtic Cross Spread**
*   **Layout:** A complex ten-card spread that is one of the most detailed and comprehensive readings. It provides a deep and multi-faceted look into a problem.
*   **Positional Meanings (one common variation):**
    1.  **The Heart of the Matter:** The present situation, the core of the question.
    2.  **The Challenge:** The immediate obstacle or conflict.
    3.  **The Foundation (Below):** The distant past, events that have shaped the current situation.
    4.  **The Recent Past (Behind):** Events that have just occurred.
    5.  **The Goal / Potential (Above):** The best possible outcome or the goal to strive for.
    6.  **The Near Future (Ahead):** What is likely to happen next.
    7.  **Your Perspective:** Your attitude, thoughts, and feelings about the matter.
    8.  **External Environment:** Influences from other people and your surroundings.
    9.  **Hopes and Fears:** What you most desire and what you most dread.
    10. **The Final Outcome:** The most likely result if the current course continues.
*   **Best for:** Important, complex questions that require a detailed analysis.

***Disclaimer:** The positional meanings in Tarot spreads can vary between readers and traditions. These are common interpretations, but you can always adjust them to fit your own intuition. Key sources for these classic spreads draw from foundational Tarot literature by authors such as A. E. Waite and modern masters like Rachel Pollack and Mary K. Greer.*
`
};

export const UI_TEXT = {
    vi: {
        appName: "Tarot4u",
        fullName: "Họ và tên",
        fullNamePlaceholder: "Ví dụ: Nguyễn Văn A",
        dob: "Ngày Sinh",
        gender: "Giới tính",
        male: "Nam",
        female: "Nữ",
        other: "Khác",
        readTarot: "Xem Bài Tarot",
        tarotWiki: "Tarot Wiki",
        tarotSkins: "Giao Diện Bài",
        readingHistory: "Lịch Sử Xem Bài",
        chooseTopic: "Chọn một chủ đề để khám phá:",
        love: "Tình Yêu",
        work: "Công Việc",
        money: "Tiền Bạc",
        destiny: "Vận Mệnh",
        yesNo: "'Có' hay 'Không'",
        customTopic: "Hoặc nhập chủ đề của bạn:",
        customTopicPlaceholder: "VD: Tôi có nên bắt đầu kinh doanh?",
        continue: "Tiếp Tục",
        back: "Quay Lại",
        drawingCards: "Đang rút bài...",
        interpreting: "AI đang luận giải và tạo hình ảnh...",
        yourReadingFor: "Kết quả xem bài cho:",
        topic: "Chủ đề",
        cardsDrawn: "Các lá bài đã rút",
        interpretation: "Luận giải",
        reversed: "ngược",
        noHistory: "Chưa có lịch sử xem bài.",
        delete: "Xoá",
        rateUsefulness: "Vui lòng đánh giá mức độ hữu ích của lần xem bài này trước khi xoá.",
        confirmDelete: "Xác nhận xoá",
        usefulness: "Mức độ hữu ích",
        deletedEntry: "Lần xem bài đã được xoá",
        generatingImage: "Đang tạo ảnh...",
        selectSkin: "Chọn một giao diện cho các lá bài:",
        loading: "Đang tải...",
        resultFromToday: "Kết quả này đã được xem trong ngày hôm nay. Hiển thị lại kết quả cũ.",
        imageFailedToLoad: "Không thể tải ảnh.",
        readingFailed: "Tạo kết quả thất bại",
        quota: "Hạn ngạch hôm nay",
        interpretations: "Luận giải",
        images: "Hình ảnh",
        aboutTarot: "Về Tarot",
        tarotsStory: "Câu chuyện của Tarot",
        cardLibrary: "Thư Viện Bài",
        historyOfTarot: "Lịch Sử Hình Thành",
        aboutTheCards: "Về Các Lá Bài",
        typesOfSpreads: "Các Loại Trải Bài Phổ Biến",
        randomFact: "Sự Thật Ngẫu Nhiên Trong Ngày",
        errorTitle: "Ôi không! Đã xảy ra lỗi",
        errorMessage: "Ứng dụng đã gặp phải một sự cố không mong muốn. Nếu ứng dụng bị treo, bạn có thể thử tải lại trang.",
        reloadButton: "Tải Lại Ứng Dụng",
        pleaseEnterName: "Vui lòng nhập họ và tên.",
        pleaseEnterDob: "Vui lòng chọn ngày sinh.",
        pleaseSelectGender: "Vui lòng chọn giới tính.",
        dobInvalid: "Ngày sinh không được ở tương lai.",
        pleaseSelectTopic: "Vui lòng chọn hoặc nhập một chủ đề.",
        sortBy: "Sắp xếp theo",
        sortDefault: "Mặc định",
        sortNameAsc: "Tên (A-Z)",
        sortNameDesc: "Tên (Z-A)",
        sortSuit: "Theo Bộ",
        majorArcana: "Bộ Ẩn Chính",
        wands: "Bộ Gậy",
        cups: "Bộ Cốc",
        swords: "Bộ Kiếm",
        pentacles: "Bộ Tiền",
        storageFullPruning: "Bộ nhớ trình duyệt đã đầy. Đã dọn dẹp một số hình ảnh lá bài cũ để có thêm dung lượng.",
        chooseSpread: "Chọn loại trải bài",
        recommended: "Gợi ý",
        spread1Card: "Trải bài 1 lá",
        spread1CardDesc: "Một câu trả lời nhanh, súc tích cho một câu hỏi đơn giản.",
        spread3Card: "Trải bài 3 lá",
        spread3CardDesc: "Nhìn nhận vấn đề qua lăng kính Quá khứ - Hiện tại - Tương lai.",
        spread5Card: "Trải bài 5 lá",
        spread5CardDesc: "Phân tích sâu hơn về tình huống, các yếu tố ảnh hưởng và lời khuyên.",
        anotherFact: "Xem sự thật khác",
        loadingFacts: "Đang tìm kiếm những sự thật thú vị...",
        assistantTitle: "Trợ lý Tarot SAGE",
        assistantPlaceholder: "Hỏi về một lá bài, cách dùng app...",
        assistantWelcome: "Xin chào! Tôi là SAGE. Tôi có thể giúp gì cho bạn về Tarot hoặc về ứng dụng này?",
        refreshConversation: "Làm mới cuộc trò chuyện",
        settings: "Cài đặt",
        assistantSettings: "Cài đặt Trợ lý SAGE",
        readingSettings: "Cài đặt Xem Bài",
        aiModel: "Mô hình AI",
        conversationStyle: "Phong cách trò chuyện",
        defaultStyle: "Mặc định",
        anhStyle: "Anh",
        chiStyle: "Chị",
        emStyle: "Em",
        banStyle: "Bạn bè",
        customStyle: "Tuỳ chỉnh",
        customStylePlaceholder: "Nhập phong cách trò chuyện, VD: một nhà chiêm tinh bí ẩn",
        deckUsed: "Bộ bài sử dụng",
        fullDeck: "Toàn bộ bài",
        majorArcanaOnly: "Chỉ Bộ Ẩn Chính",
        minorArcanaOnly: "Chỉ Bộ Ẩn Phụ",
        interpretationStyle: "Phong cách luận giải",
        interpretationStyleHint: "Chọn tối đa 2 yếu tố",
        accurate: "Chính xác",
        balanced: "Cân bằng",
        positive: "Tích cực",
        concise: "Ngắn gọn",
        detailed: "Chi tiết",
        cardSkins: "Giao Diện Lá Bài",
        ok: "OK",
        cardLibraryNote: "Lưu ý: Hình ảnh các lá bài sẽ xuất hiện dần trong thư viện khi bạn xem kết quả trải bài, vượt qua các thử thách hoặc chiến thắng trong các trò chơi.",
        uprightMeaning: "Ý Nghĩa Xuôi",
        reversedMeaning: "Ý Nghĩa Ngược",
        viewInStyle: "Xem Với Giao Diện",
        chooseSkin: "Chọn Giao Diện",
        soundSettings: "Cài đặt Âm thanh",
        backgroundMusic: "Nhạc nền",
        volume: "Âm lượng",
        none: "Không có",
        dreamy: "Mộng mơ",
        warm: "Ấm áp",
        deep: "Sâu lắng",
        mystery: "Huyền bí",
        nostalgic: "Hoài niệm",
        exotic: "Kỳ lạ",
        ancient: "Cổ đại",
        appearanceSettings: "Cài đặt Giao diện",
        mysterious: "Huyền bí",
        vibrant: "Rực rỡ",
        gentle: "Dịu dàng",
        dynamic: "Năng động",
        background: "Hình nền",
        cuteCat: "Mèo Dễ Thương",
        sunMoon: "Mặt Trời & Mặt Trăng",
        generatingReading: "Đang tạo phiên giải bài của bạn...",
        pickNCards: "Vui lòng chọn {count} lá bài",
        cardsSelected: "{count}/{max} lá đã chọn",
        confirmSelection: "Xem Kết Quả",
        resetSelection: "Chọn Lại",
        downloadResult: "Tải Kết Quả",
        generatingDownload: "Đang tạo ảnh để tải xuống...",
        customSkins: "Giao Diện Tùy Chỉnh",
        manageMySkin: "Quản lý Giao Diện Của Tôi",
        uploadImage: "Tải Lên Ảnh",
        myImageLibrary: "Thư Viện Ảnh Của Tôi",
        assignToCard: "Gán cho Lá Bài",
        changeImage: "Đổi Ảnh",
        noCustomImages: "Bạn chưa tải lên ảnh nào. Hãy bắt đầu bằng cách tải lên một ảnh!",
        dropImageHere: "Kéo và thả ảnh vào đây, hoặc nhấn để chọn",
        imageUploadSuccess: "Tải ảnh lên thành công!",
        imageUploadError: "Lỗi tải ảnh lên. Vui lòng thử lại.",
        confirmDeleteImage: "Bạn có chắc muốn xóa ảnh này? Hành động này không thể hoàn tác.",
        imageInUse: "Ảnh này đang được sử dụng. Xóa nó sẽ hoàn lại lá bài về mặc định.",
        selectAnImage: "Chọn một ảnh để gán",
        backToSkins: "Quay lại Giao diện",
        ...VIETNAMESE_CONTENT,
    },
    en: {
        appName: "Tarot4u",
        fullName: "Full Name",
        fullNamePlaceholder: "E.g., John Doe",
        dob: "Date of Birth",
        gender: "Gender",
        male: "Male",
        female: "Female",
        other: "Other",
        readTarot: "Read Tarot",
        tarotWiki: "Tarot Wiki",
        tarotSkins: "Card Skins",
        readingHistory: "Reading History",
        chooseTopic: "Choose a topic to explore:",
        love: "Love",
        work: "Work",
        money: "Money",
        destiny: "Destiny",
        yesNo: "'Yes' or 'No'",
        customTopic: "Or enter your own topic:",
        customTopicPlaceholder: "E.g., Should I start a business?",
        continue: "Continue",
        back: "Back",
        drawingCards: "Drawing cards...",
        interpreting: "AI is interpreting and generating images...",
        yourReadingFor: "Your reading for:",
        topic: "Topic",
        cardsDrawn: "Cards Drawn",
        interpretation: "Interpretation",
        reversed: "reversed",
        noHistory: "No reading history yet.",
        delete: "Delete",
        rateUsefulness: "Please rate the usefulness of this reading before deleting.",
        confirmDelete: "Confirm Deletion",
        usefulness: "Usefulness",
        deletedEntry: "This reading has been deleted",
        generatingImage: "Generating image...",
        selectSkin: "Select a skin for the cards:",
        loading: "Loading...",
        resultFromToday: "This reading was already performed today. Showing the previous result.",
        imageFailedToLoad: "Failed to load image.",
        readingFailed: "Failed to generate result",
        quota: "Today's Quota",
        interpretations: "Interpretations",
        images: "Images",
        aboutTarot: "About Tarot",
        tarotsStory: "Tarot's Story",
        cardLibrary: "Card Library",
        historyOfTarot: "History of Tarot",
        aboutTheCards: "About The Cards",
// FIX: Renamed 'commonSpreadTypes' to 'typesOfSpreads' to match the key in the 'vi' object, ensuring type consistency.
        typesOfSpreads: "Common Spread Types",
        randomFact: "Today's Random Fact",
        errorTitle: "Oh No! Something Went Wrong",
        errorMessage: "The application encountered an unexpected problem. If the app is frozen, you can try reloading the page.",
        reloadButton: "Reload Application",
        pleaseEnterName: "Please enter your full name.",
        pleaseEnterDob: "Please select your date of birth.",
        pleaseSelectGender: "Please select a gender.",
        dobInvalid: "Date of birth cannot be in the future.",
        pleaseSelectTopic: "Please choose or enter a topic.",
        sortBy: "Sort by",
        sortDefault: "Default",
        sortNameAsc: "Name (A-Z)",
        sortNameDesc: "Name (Z-A)",
        sortSuit: "Suit",
        majorArcana: "Major Arcana",
        wands: "Wands",
        cups: "Cups",
        swords: "Swords",
        pentacles: "Pentacles",
        storageFullPruning: "Browser storage was full. Cleared some older card images to make space.",
        chooseSpread: "Choose Your Spread",
        recommended: "Recommended",
        spread1Card: "1-Card Spread",
        spread1CardDesc: "A quick, concise answer to a simple question.",
        spread3Card: "3-Card Spread",
        spread3CardDesc: "View the issue through the lens of Past - Present - Future.",
        spread5Card: "5-Card Spread",
        spread5CardDesc: "A deeper analysis of the situation, influencing factors, and advice.",
        anotherFact: "See another fact",
        loadingFacts: "Finding interesting facts...",
        assistantTitle: "Tarot Assistant SAGE",
        assistantPlaceholder: "Ask about a card, how to use the app...",
        assistantWelcome: "Hello! I'm SAGE. How can I assist you with Tarot or this application today?",
        refreshConversation: "Refresh conversation",
        settings: "Settings",
        assistantSettings: "SAGE Assistant Settings",
        readingSettings: "Tarot Reading Settings",
        aiModel: "AI Model",
        conversationStyle: "Conversation Style",
        defaultStyle: "Default",
        anhStyle: "Older Brother",
        chiStyle: "Older Sister",
        emStyle: "Younger Sibling",
        banStyle: "Friend",
        customStyle: "Custom",
        customStylePlaceholder: "Enter a persona, e.g., a mysterious astrologer",
        deckUsed: "Deck Used for Readings",
        fullDeck: "Full Deck",
        majorArcanaOnly: "Major Arcana Only",
        minorArcanaOnly: "Minor Arcana Only",
        interpretationStyle: "Interpretation Style",
        interpretationStyleHint: "Select up to 2 traits",
        accurate: "Accurate",
        balanced: "Balanced",
        positive: "Positive",
        concise: "Concise",
        detailed: "Detailed",
        cardSkins: "Card Skins",
        ok: "OK",
        cardLibraryNote: "Note: Card images will gradually appear in the library as you view reading results, overcome challenges, or win games.",
        uprightMeaning: "Upright Meaning",
        reversedMeaning: "Reversed Meaning",
        viewInStyle: "View In Style",
        chooseSkin: "Choose Skin",
        soundSettings: "Sound Settings",
        backgroundMusic: "Background Music",
        volume: "Volume",
        none: "None",
        dreamy: "Dreamy",
        warm: "Warm",
        deep: "Deep",
        mystery: "Mystery",
        nostalgic: "Nostalgic",
        exotic: "Exotic",
        ancient: "Ancient",
        appearanceSettings: "Appearance Settings",
        mysterious: "Mysterious",
        vibrant: "Vibrant",
        gentle: "Gentle",
        dynamic: "Dynamic",
        background: "Background",
        cuteCat: "Cute Cat",
        sunMoon: "Sun & Moon",
        generatingReading: "Generating your reading...",
        pickNCards: "Please select {count} card(s)",
        cardsSelected: "{count}/{max} cards selected",
        confirmSelection: "Reveal Cards",
        resetSelection: "Reset Selection",
        downloadResult: "Download Result",
        generatingDownload: "Generating image for download...",
        customSkins: "Custom Skins",
        manageMySkin: "Manage My Skin",
        uploadImage: "Upload Image",
        myImageLibrary: "My Image Library",
        assignToCard: "Assign to Card",
        changeImage: "Change Image",
        noCustomImages: "You haven't uploaded any images yet. Get started by uploading one!",
        dropImageHere: "Drag & drop an image here, or click to select",
        imageUploadSuccess: "Image uploaded successfully!",
        imageUploadError: "Error uploading image. Please try again.",
        confirmDeleteImage: "Are you sure you want to delete this image? This cannot be undone.",
        imageInUse: "This image is in use. Deleting it will revert cards to default.",
        selectAnImage: "Select an image to assign",
        backToSkins: "Back to Skins",
        ...ENGLISH_CONTENT,
    }
}