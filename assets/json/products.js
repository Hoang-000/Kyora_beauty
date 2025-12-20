
const products = [
    {
        id: 1,
        name: "Kem L'Oreal Perfect Match 100ml",
        price: "320.000₫",
        image: "../assets/images/MAKEUP/L'Orél Paris/Kem nền L_Oreal Perfect Match 100ml.png",
        category: "makeup",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Kem nền Loreal Perfect Match mang lại lớp nền mỏng nhẹ phủ sương, phù hợp với các cô nàng thích sự tự nhiên cho trang điểm hàng ngày. ",
        uses: "Là lựa chọn lý tưởng cho da thường và da dầu, công thức kem nền mịn độc quyền của chúng tôi có các hạt phấn siêu nhỏ giúp kiểm soát bóng nhờn và làm mờ lỗ chân lông.Kem nền thu nhỏ lỗ chân lông.<br>Đã được bác sĩ da liễu kiểm nghiệm.Đã được kiểm nghiệm dị ứng.Không gây mụn.",
        howToUse: "Lấy một lượng kem nền vừa đủ ra mu bàn tay, sau đó dùng cọ hoặc mút tán đều lên mặt và cổ, tập trung ở các vùng cần che phủ.",
        ingredients: "CYCLOPENTASILOXANE,AQUA / NƯỚC,POLYPROPYLSILSESQUIOXANE,ISODODECANE,DIMETHICONE,C30-45 ALKYLDIMETHYLSILYL POLYPROPYLSILSESQUIOXANE,PEG-10 DIMETHICONE,GLYCERIN,SILICA,DIMETHICONE/POLYGLYCERIN-3 CROSSPOLYMER,SODIUM CHLORIDE,NYLON-12,PHENOXYETHANOL,DISTEARDIMONIUM HECTORITE,DISODIUM STEAROYL GLUTAMATE,CYCLOMETHICONE,CHLORPHENESIN,"
    },
    {
        id: 2,
        name: "Bút Kẻ Mắt Lâu Trôi Flash Cat Eye L'oreal",
        price: "185.000₫",
        image: "../assets/images/MAKEUP/L’Oréal Paris/Bút Kẻ Mắt Lâu Trôi Flash Cat Eye L_oreal.png",
        category: "makeup",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Kẻ Mắt Nước Mắt Mèo L'Oreal Màu Đen Super Liner Flash Cat Eye - Black đến từ thương hiệu mỹ phẩm trang điểm L'Oreal Paris nổi tiếng của Pháp, sản phẩm được sản xuất theo công nghệ tiên tiến giúp bạn nhanh chóng có được các đường kẻ mắt chính xác, sắc sảo mà không sợ lem. Đồng thời, màu sắc được đổ ra rất đậm và sắc nét, góp phần trang điểm hoàn thiện nên đôi mắt cá tính và hiện đại trên gương mặt bạn.",
        uses: "Đầu cọ 0,01mm sắc mảnh giúp tạo đường eyeliner sắc sảo, linh hoạt dễ dàng tạo đường cực mảnh đến dày phù hợp cho mọi phong cách trang điểm. Công nghệ Ink Capsule mới khiến mực ra đều, đậm hơn 147% so với phiên bản trước. Độ bền màu lên đến 36 giờ, có khả năng kháng nước, mồ hôi, không lem trôi.",
        howToUse: "Kẻ những đường ngắn sát mi mắt. Nối những đường kẻ cho nét vẽ liền mạch, tạo nét vẽ mỏng hoặc dày tùy theo phong cách. Nên sử dụng tẩy trang chuyên dụng để làm sạch hiệu quả hơn."
    },
    {
        id: 3,
        name: "Chì kẻ mày",
        price: "210.000₫",
        image: "../assets/images/MAKEUP/L’Oréal Paris/Chì kẻ mày.png",
        category: "makeup",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Chì kẻ mày là một trong những món đồ hỗ trợ đắc lực cho quá trình trang điểm của các nàng để có hàng lông mày sắc nét, thu hút mọi ánh nhìn. Đặc biệt, với những nàng có hàng lông mày nhạt, không đều màu thì bút kẻ mày lại càng cần thiết. Chì kẻ chân mày 2 đầu Loreal với thiết kế hai đầu kẻ tiện lợi là một trong những sản phẩm kẻ mày đang được yêu thích trong thời gian gần đây."
    },
    {
        id: 4,
        name: "Mascara L'oreal Voluminous Lash Paradise Waterproof",
        price: "120.000₫",
        image: "../assets/images/MAKEUP/L’Oréal Paris/Mascara Loreal Voluminous Lash Paradise Waterproof.png",
        category: "makeup",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Mascara Loreal góp phần cho đôi mắt trở nên thu hút và đầy quyến rũ hơn một bước cực kì quan trọng trong makeup , đôi là yếu tốt chính để quyết định thần thái cho khuôn mặt. Chải giúp mi tơi ra rõ rệt hẳn. Làm cho đôi mắt to hơn với đôi mi cong hoàn hảo . Gây lôi cuốn cho người đối diện ngay. Mascara Lash Paradise Waterproof gây ấn tượng với mình bởi thiết kế giống như một thỏi son nhỏ gọn. Màu hồng mắt mắt mà bất kì cô nàng nào đều thích"
    },
    {
        id: 5,
        name: "Phấn Má L'Oreal Le Blush True Match 110 Rose Guimauve",
        price: "450.000₫",
        image: "../assets/images/MAKEUP/L’Oréal Paris/Phấn Má L_Oreal Le Blush True Match 110 Rose Guimauve.png",
        category: "makeup",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Phấn má hồng siêu mịn dạng nén với màu sắc nhẹ nhàng cùng tác dụng kiềm dầu cho bạn đôi gò má hồng hào đầy thu hút."
    },
    {
        id: 6,
        name: "Phấn Mắt L'oreal Paris Color Riche La Palette Nude Rose 01",
        price: "280.000₫",
        image: "../assets/images/MAKEUP/L’Oréal Paris/Phấn Mắt Loreal Paris Color Riche La Palette Nude Rose 01.png",
        category: "makeup",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Bảng màu mắt Loreal Paris Color Riche La Palette Nude sở hữu 10 ô màu nude thời thượng phù hợp với tông màu da từ sậm đến sáng, giúp làm bật lên mọi dáng mắt. Tông màu trầm ấm này thích hợp dùng trang điểm thường ngày khi đi làm, đi chơi, hẹn hò. Bảng màu mắt Loreal Paris Color Riche La Palette Nude sẽ giúp bạn bộc lộ những nét đẹp tiềm ẩn."
    },
    {
        id: 7,
        name: "Phấn nước L'Oreal True Match Lumi Cushion Foundation",
        price: "150.000₫",
        image: "../assets/images/MAKEUP/L’Oréal Paris/Phấn nước L’Oreal True Match Lumi Cushion Foundation.png",
        category: "makeup",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Phấn nước là một trong những sản phẩm “đa năng” nhất hiện nay, có thể giúp nàng rút gọn các bước trang điểm chỉ trong 1 bước, lớp phấn nước L'oreal True Match Cushion mỏng mịn có thể che mọi khuyết điểm cũng như giúp bạn tự tin hơn."
    },
    {
        id: 8,
        name: "Son L'Oreal 580 Peony Pink Màu Hồng Nhũ",
        price: "95.000₫",
        image: "../assets/images/MAKEUP/L’Oréal Paris/Son L’Oreal 580 Peony Pink Màu Hồng Nhũ.png",
        category: "makeup",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Cấp ẩm tức thì cho da tay khô ráp, bảo vệ da khỏi các tác động từ môi trường và duy trì độ ẩm lâu dài."
    },
    {
        id: 9,
        name: "Son L'oreal Chiffon Signature 224 I Touch Màu Hồng Nude",
        price: "199.000₫",
        image: "../assets/images/MAKEUP/L’Oréal Paris/Son Loreal Chiffon Signature 224 I Touch Màu Hồng Nude.png",
        category: "makeup",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Màu đỏ gạch thời thượng, chất son kem lì mịn màng, lâu trôi, không gây khô môi."
    },
    {
        id: 10,
        name: "Dưỡng Chất Sáng Da, Mờ Thâm Mụn & Nám 30ml.",
        price: "175.000₫",
        image: "../assets/images/Chăm sóc da mặt/L’Oréal Paris/Dưỡng Chất Sáng Da, Mờ Thâm Mụn & Nám 30ml.png",
        category: "face",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Thiết kế cọ đặc biệt giúp làm dày và dài mi gấp nhiều lần, chống thấm nước, không lem trôi."
    },
    {
        id: 11,
        name: "Kem dưỡng siêu cấp ẩm căng mịn da L_Oreal Paris ",
        price: "250.000₫",
        image: "../assets/images/Chăm sóc da mặt/L’Oréal Paris/Kem dưỡng siêu cấp ẩm căng mịn da L_Oreal Paris .png",
        category: "face",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Kiểm soát dầu nhờn hiệu quả, giữ lớp nền bền màu, tạo lớp finish mỏng nhẹ, tự nhiên."
    },
    {
        id: 12,
        name: "Mặt Nạ Dưỡng Chất",
        price: "160.000₫",
        category: "face",
        image: "../assets/images/Chăm sóc da mặt/L’Oréal Paris/Mặt Nạ Dưỡng Chất.png",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 13,
        name: "Nước Tẩy Trang Đa Năng 3In1 Kiềm Dầu L_Oreal Paris 95Ml",
        price: "160.000₫",
        category: "face",
        image: "../assets/images/Chăm sóc da mặt/L’Oréal Paris/Nước Tẩy Trang Đa Năng 3In1 Kiềm Dầu L_Oreal Paris 95Ml.png",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 14,
        name: "Sữa Rửa Mặt Sáng Da L_Oreal Paris Glycolic-Bright Glowing",
        price: "160.000₫",
        category: "face",
        image: "../assets/images/Chăm sóc da mặt/L’Oréal Paris/Sữa Rửa Mặt Sáng Da L_Oreal Paris Glycolic-Bright Glowing.png",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 15,
        name: "Kem Dưỡng Da Ban Đêm Loreal Revitalift Laser 50ml",
        price: "170.000₫",
        category: "body",
        image: "../assets/images/Chăm sóc da body/L’Oréal Paris/Kem Dưỡng Da Ban Đêm Loreal Revitalift Laser 50ml.png",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 16,
        name: "Kem Dưỡng Sáng Da Ban Ngày L_Oreal White Perfect Day Cream Spf17 Pa++ 50Ml",
        price: "260.000₫",
        category: "body",
        image: "../assets/images/Chăm sóc da body/L’Oréal Paris/Kem Dưỡng Sáng Da Ban Ngày L_Oreal White Perfect Day Cream Spf17 Pa++ 50Ml.png",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 17,
        name: "Kem dưỡng thể L_oreal 250ml",
        price: "460.000₫",
        category: "body",
        image: "../assets/images/Chăm sóc da body/L’Oréal Paris/Kem dưỡng thể L_oreal 250ml.png",
        brand: "loreal",
        brandName: "L'Oréal Paris",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 18,
        name: "Bơ dưỡng thể cà phê đắk lắk cocoon 200ml",
        price: "400.000₫",
        category: "body",
        image: "../assets/images/Chăm sóc da body/Cocoon/Bơ dưỡng thể cà phê đắk lắk cocoon 200ml.png",
        brand: "cocoon",
        brandName: "Cocoon",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 19,
        name: "Cà Phê Đắk Lắk Tẩy Da Chết Toàn Thân Cocoon Dak Lak Coffee Body Polish 200ml",
        price: "400.000₫",
        category: "body",
        image: "../assets/images/Chăm sóc da body/Cocoon/Cà Phê Đắk Lắk Tẩy Da Chết Toàn Thân Cocoon Dak Lak Coffee Body Polish 200ml.png",
        brand: "cocoon",
        brandName: "Cocoon",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 20,
        name: "Gel tắm khuynh diệp & bạc hà Cocoon làm sạch và thư giãn 500ml",
        price: "400.000₫",
        category: "body",
        image: "../assets/images/Chăm sóc da body/Cocoon/Gel tắm khuynh diệp & bạc hà Cocoon làm sạch và thư giãn 500ml.png",
        brand: "cocoon",
        brandName: "Cocoon",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 21,
        name: "Tẩy Da Chết Toàn Thân Cocoon Chiết Xuất Cà Phê Đắk Lắk",
        price: "400.000₫",
        category: "body",
        image: "../assets/images/Chăm sóc da body/Cocoon/Tẩy Da Chết Toàn Thân Cocoon Chiết Xuất Cà Phê Đắk Lắk.png",
        brand: "cocoon",
        brandName: "Cocoon",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 22,
        name: "Tẩy tế bào chết cơ thể body đường thốt nốt Cocoon cho da mềm mại 200ml ",
        price: "400.000₫",
        category: "body",
        image: "../assets/images/Chăm sóc da body/Cocoon/Tẩy tế bào chết cơ thể body đường thốt nốt Cocoon cho da mềm mại 200ml .png",
        brand: "cocoon",
        brandName: "Cocoon",
        description: "Đầu cọ mảnh, sắc nét, dễ dàng tạo đường kẻ mắt hoàn hảo, công thức lâu trôi suốt cả ngày."
    },
    {
        id: 23,
        name: "Bảng Phấn Mắt Maybelline The City Mini Palette",
        price: "308.000₫",
        image: "../assets/images/MAKEUP/Maybelline/Bảng phấn mắt.png",
        category: "makeup",
        brand: "maybelline",
        brandName: "Maybelline",
        description: "Lấy cảm hứng từ những khoảnh khắc kinh điển của thành phố New York với 6 ô màu theo nhiều tone màu thời thượng, lâu trôi bền màu từ màu nhũ tới màu lì giúp bạn dễ dàng sáng tạo ra những phong cách trang điểm thật độc đáo. Sản phẩm có chất phấn thuần màu hòa tan trên bầu mắt cho độ lên màu chuẩn hơn, các hạt phấn siêu mịn, bám màu cao nhờ các tone màu có nhũ giúp đôi mắt bạn trở nên nổi bật hơn rất nhiều nên bạn vừa có thể dùng nó để trang điểm nhẹ nhàng hằng ngày hay trang điểm mắt khói cho những buổi tiệc đêm đều được"
    },

    {
        id: 24,
        name: "Chì Kẻ Mày 36H Lâu Trôi Maybelline Tattoo Brow Pigmented Pencil",
        price: "198.000₫",
        image: "../assets/images/MAKEUP/Maybelline/Chì Kẻ Mày 36H Lâu Trôi Maybelline Tattoo Brow Pigmented Pencil.png",
        category: "makeup",
        brand: "maybelline",
        brandName: "Maybelline",
        description: "Chì Kẻ Mày Maybelline Tattoo Brow Pigmented Pencil mới ra mắt từ thương hiệu Maybelline New York với đầu chì tam giác đa năng và thiết kế dạng bút vặn tiện lợi, giúp bạn dễ dàng định hình lông mày nhanh chóng, tạo sợi vô cùng dễ dàng và chân mày nhìn luôn mềm mượt và đều màu. Bên cạnh đó, Chì Kẻ Chân Mày Tatoo Brow còn có khả năng chống lem, chống trôi tốt và kháng nước lên đến 36 giờ liền."
    },


    {
        id: 25,
        name: " Fit Me®KEM CHE KHUYẾT ĐIỂM",
        price: "178.000₫",
        image: "../assets/images/MAKEUP/Maybelline/Fit Me®KEM CHE KHUYẾT ĐIỂM.png",
        category: "makeup",
        brand: "maybelline",
        brandName: "Maybelline",
        description: " Kem Che Khuyết Điểm Maybelline Fit Me® Concealer cho làn da không tì vết với độ che phủ tự nhiên. Kem che khuyết điểm không chứa dầu này tệp với tông màu da cho làn da đều màu hơn."
    },

    {
        id: 26,
        name: " FIT ME®KEM NỀN DẠNG LỎNG",
        price: "161.000₫",
        image: "../assets/images/MAKEUP/Maybelline/FIT ME®KEM NỀN DẠNG LỎNG.png",
        category: "makeup",
        brand: "maybelline",
        brandName: "Maybelline",
        description: " Kem nền Maybelline Fit Me có kết cấu kem lỏng nhẹ, dễ dàng tán đều lên da, tạo hiệu ứng lì mịn, che phủ hoàn toàn các khuyến điểm trên da, bao gồm vết thâm nám, quầng thâm mắt và đặc biệt là lỗ chân lông to khiến da mịn màng, tươi tắn, đẹp không tì vết."
    },

    {
        id: 27,
        name: " Kem Lót Kiềm Dầu Ngăn Xuống Tông SPF 20 Maybelline Fit Me Primer Matte Poreless",
        price: "143.000₫",
        image: "../assets/images/MAKEUP/Maybelline/Kem Lót Kiềm Dầu Ngăn Xuống Tông SPF 20 Maybelline Fit Me Primer Matte Poreless.png",
        category: "makeup",
        brand: "maybelline",
        brandName: "Maybelline",
        description: "Kem Lót Maybelline Fit Me Primer Matte+Poreless SPF 20 20ml là sản phẩm kem lót đến từ thương hiệu Maybelline có thành phần tích hợp đất sét khoáng giúp kiềm dầu, ngăn nền xuống tông hiệu quả suốt 16H. Chất kem dạng sữa dễ tán, đem lại hiệu ứng làm mềm da, làm mờ lỗ chân lông ngay sau khi sử dụng. Ngoài ra, sản phẩm có thêm SPF 20 giúp bảo vệ da khỏi tác hại của ánh nắng mặt trời. Sản phẩm được khuyên dùng trước bước đánh kem nền để đem lại lớp nền mịn lì, không bóng dầu, không xuống tông suốt ngày dài."
    },

    {
        id: 28,
        name: " KEM NỀN LÂU TRÔI SUPER STAY ACTIVE WEAR",
        price: "283.000₫",
        image: "../assets/images/MAKEUP/Maybelline/KEM NỀN LÂU TRÔI SUPER STAY ACTIVE WEAR.png",
        category: "makeup",
        brand: "maybelline",
        brandName: "Maybelline",
        description: " Kem Nền Maybelline Superstay Active Wear Foundation 30H 30ml là dòng sản phẩm kem nền vượt trội mới ra mắt từ Maybelline New York - Mỹ. Kem nền Maybelline Superstay Active Wear Foundation 30H mới có khả năng hạn chế lem trôi, ngăn nước và mồ hôi làm xê dịch lớp nền suốt ngày dài. Nếu bạn cần một lớp nền tiệp màu da nhưng vẫn mỏng nhẹ và lâu trôi, kem nền Maybelline sẽ đáp ứng mọi nhu cầu trên và giúp bạn sở hưu lớp nền tuyệt vời. Với công thức không chứa dầu giúp thông thoáng lỗ chân lông, kem nền phù hợp với mọi loại da."
    },

    {
        id: 29,
        name: " Mascara Dài Và Cong Mi Maybelline Hyper Curl Waterproof",
        price: "125.000₫",
        image: "../assets/images/MAKEUP/Maybelline/Mascara Dài Và Cong Mi Maybelline Hyper Curl Waterproof.png",
        category: "makeup",
        brand: "maybelline",
        brandName: "Maybelline",
        description: " Mascara Maybelline Dài Mi và Cong Mi, Chuốt Mi Đen là sản phẩm mascara đến từ thương hiệu mỹ phẩm Maybeline của Mỹ, có tác dụng giúp làm dày gấp 3 lần và hàng mi cong vút 75 độ, bền đẹp suốt 18 giờ. Nhờ công thức tối ưu kết hợp với đầu cọ được thiết kế dễ dàng chải tận gốc sợi mi, giúp mascara được bao phủ hiệu quả, cho bạn đôi mi dày ấn tượng, cong quyến rũ. Sản phẩm không thấm nước, không lem. Kết cấu dạng gel đặc biệt, nhẹ, mượt giữ mi cong và dày, không vón cục."
    },

    {
        id: 30,
        name: " PHẤN MÁ HỒNG MỊN LÌ MAYBELLINE FIT ME MONO BLUSH",
        price: "110.000₫",
        image: "../assets/images/MAKEUP/Maybelline/PHẤN MÁ HỒNG MỊN LÌ MAYBELLINE FIT ME MONO BLUSH.png",
        category: "makeup",
        brand: "maybelline",
        brandName: "Maybelline",
        description: " Phấn Má Hồng Fit Me Mono Blush 4.5g là sản phẩm má hồng dạng phấn nén đến từ thương hiệu Maybelline của Mỹ, có khả năng lên màu chuẩn - mịn mướt - tự nhiên và bền màu suốt cả ngày. Với các hạt vi phấn kết cấu nhẹ và mịn giúp chuẩn màu trong 1 lần chạm, tạo hiệu ứng gò má ửng hồng tự nhiên. Chất bột kem mịn mượt tựa như tan vào da, cho khả năng bám màu lâu trôi, bền màu lên đến 16H. Sản phẩm an toàn, không chứa hóa chất độc hại, phù hợp với mọi loại da."
    },

    {
        id: 31,
        name: " Son Kem Mịn Lì Maybelline Sensational Cushion Mattes",
        price: "228.000₫",
        image: "../assets/images/MAKEUP/Maybelline/Son Kem Mịn Lì Maybelline Sensational Cushion Mattes.png",
        category: "makeup",
        brand: "maybelline",
        brandName: "Maybelline",
        description: " Son Kem Maybelline Sensational Cushion Mattes 6.4ml là sản phẩm son kem đến từ thương hiệu mỹ phẩm nổi tiếng Maybelline New York, với cảm hứng từ cushion Maybelline cho ra đời dòng son Sensational Cushion Matte với kết cấu mềm mại, mịn lì như nhung. Đặc biệt, sử dụng công nghệ đột phá Hiệu ứng lì đa chiều - dimensional matte, tạo không gian nhiều sắc độ, chiều sâu, hút trọn sắc son rồi bung ra ôm ấp lấy bờ môi xinh xắn của người châu Á."
    },
];