<#--

    Copyright 2023 StarTree Inc

    Licensed under the StarTree Community License (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.startree.ai/legal/startree-community-license

    Unless required by applicable law or agreed to in writing, software distributed under the
    License is distributed on an "AS IS" BASIS, WITHOUT * WARRANTIES OF ANY KIND,
    either express or implied.
    See the License for the specific language governing permissions and limitations under
    the License.

-->
<div class="container-fluid">
  <div class="row bg-white row-bordered ">
    <div class="container">

      <div class="search-bar">
        <div class="search-select">
          <select id="anomalies-search-mode" style="width:100%">
            <option value="metric">Metric(s)</option>
            <option value="id">Anomaly ID</option>
            <option value="time" selected>Time</option>
            <option value="groupId">Group ID</option>
          </select>
        </div>

        <div class="search-input search-field">
          <div id="anomalies-search-metrics-container" class="" style="overflow:hidden; display: none;">
            <select id="anomalies-search-metrics-input" class="label-large-light" multiple="multiple"></select>
          </div>
          <div id="anomalies-search-dashboard-container" class=""  style="overflow:hidden; display: none;">
            <select id="anomalies-search-dashboard-input" class="label-large-light"></select>
          </div>
          <div id="anomalies-search-anomaly-container" class=""  style="overflow:hidden; display: none;">
            <select id="anomalies-search-anomaly-input" class="label-large-light" multiple="multiple"></select>
          </div>
          <div id="anomalies-search-time-container" class=""  style="overflow:hidden; display: none;">
            <select id="anomalies-search-time-input" class="label-large-light"></select>
          </div>

          <div id="anomalies-search-group-container" class=""  style="overflow:hidden; display: none;">
            <select id="anomalies-search-group-input" class="label-large-light" multiple="multiple"></select>
          </div>
        </div>

        <a class="btn thirdeye-btn search-button" type="button" id="search-button"><span class="glyphicon glyphicon-search"></span></a>
      </div>
    </div>
  </div>
</div>

<div class="container top-buffer bottom-buffer">
  <div class="page-content">
    <div class="page-filter" id="anomaly-filters-wrapper-place-holder"></div>
    <div id='anomaly-spin-area'></div>
    <div class="page-results" id="anomaly-results-place-holder"></div>
  </div>
</div>
