<template>
  <b-card no-body class="panel panel-default">
    <b-card-header header-tag="header" class="panel-heading" role="tab">
      <h4 class="panel-title">
        <a v-b-toggle.accordion-2 role="button" class="collapsed">
          <div class="d-flex flex-row mg-73">
            <div><i class="clipboard_outline_icon mr-2"></i></div>
            <div class="mt-1 font12">Summary Interaction</div>
          </div>
        </a>
      </h4>
    </b-card-header>
    <b-collapse
      id="accordion-2"
      visible
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Category</h6>
          </div>
          <div class="col-sm-8">
            <input
              v-b-modal.modal-category
              readonly
              type="text"
              class="form-control no-border font12"
              :data-id="categoryId"
              :value="category"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">
              Sub Category
            </h6>
          </div>
          <div class="col-sm-8">
            <input
              readonly
              type="text"
              class="form-control no-border font12"
              :data-id="subcategoryId"
              :value="subcategory"
              style="margin-top:10px;"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Remark</h6>
          </div>
          <div class="col-sm-8">
            <textarea class="form-control no-border font12" rows="2"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Feedback</h6>
          </div>
          <div class="col-sm-8">
            <textarea class="form-control no-border font12" rows="2"></textarea>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col-sm-4">
            <h6 class="text-grey font12 font-normal pt-2">Sentimen</h6>
          </div>
          <div class="col-sm-8">
            <div class="d-flex flex-row">
              <div><i class="emoji_smile_icon"></i></div>
              <div><i class="emoji_flat_icon"></i></div>
              <div><i class="emoji_sad_icon"></i></div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-block btn-yellow btn-md mt-3">
          Save
        </button>
      </b-card-body>
    </b-collapse>
    <b-modal id="modal-category" size="lg" title="Select Category">
      <b-container fluid>
        <data-table
          title="Categories"
          :columns="categoryColumns"
          :rows="rowsColumns"
          @row-click="selectedCategory"
        >
          <th slot="thead-tr">
            Actions
          </th>
          <template slot="tbody-tr">
            <td>
              <button class="btn btn-info btn-md">
                Select
              </button>
            </td>
          </template>
        </data-table>
      </b-container>
    </b-modal>
  </b-card>
</template>

<script>
import DataTable from "vue-materialize-datatable";
export default {
  data() {
    return {
      categoryId: null,
      category: null,
      subcategoryId: null,
      subcategory: null,
      categoryColumns: [
        {
          label: "Category",
          field: "category",
          numeric: false,
          html: false
        },
        {
          label: "Sub Category",
          field: "subcategory",
          numeric: false,
          html: false
        }
      ],
      rowsColumns: [
        {
          category: "Wrong Call",
          subcategory: "Banking",
          idCategory: 1,
          idSubCategory: 1
        },
        {
          category: "Inquiry",
          subcategory: "Pricelist-Daily",
          idCategory: 2,
          idSubCategory: 1
        },
        {
          category: "Inquiry",
          subcategory: "Pricelist-Weekly",
          idCategory: 2,
          idSubCategory: 2
        },
        {
          category: "Inquiry",
          subcategory: "Pricelist-Monthly",
          idCategory: 2,
          idSubCategory: 3
        }
      ]
    };
  },
  components: {
    "data-table": DataTable
  },
  methods: {
    selectedCategory(row) {
      this.categoryId = row.idCategory;
      this.category = row.category;
      this.subcategoryId = row.idSubCategory;
      this.subcategory = row.subcategory;
      console.log("row.category>>>", row.category);
      console.log("row.idCategory>>>", row.idCategory);
      console.log("row.subcategory>>>", row.subcategory);
      console.log("row.idSubCategory>>>", row.idSubCategory);
      this.$bvModal.hide("modal-category");
      alert("check console.log");
    }
  }
};
</script>
