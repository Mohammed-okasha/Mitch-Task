import { toast } from "react-toastify";

export const generateCategories = (items) => {
  const uniqueCategories =
    items.length > 0
      ? [
          {
            category_name_ar: "جميع الحلويات",
            category_slug: "",
          },

          ...new Map(
            items.map((item) => [
              item["category_slug"],
              {
                category_name_ar: item.category_name_ar,
                category_slug: item.category_slug,
              },
            ])
          ).values(),
        ]
      : [];

  return uniqueCategories;
};

export const notification = (status, message) => {
  toast[status](message, {
    position: "top-right",
    autoClose: 3000,
    theme: "colored",
  });
};
