/*
 * Copyright 2023 StarTree Inc
 *
 * Licensed under the StarTree Community License (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at http://www.startree.ai/legal/startree-community-license
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT * WARRANTIES OF ANY KIND,
 * either express or implied.
 * See the License for the specific language governing permissions and limitations under
 * the License.
 */
package ai.startree.thirdeye.datalayer.entity;

import ai.startree.thirdeye.spi.detection.dimension.DimensionMap;

public class MergedAnomalyResultIndex extends AbstractIndexEntity {

  long functionId;
  long detectionConfigId;
  long anomalyFeedbackId;
  long metricId;
  long startTime;
  long endTime;
  String collection;
  String metric;
  DimensionMap dimensions;
  boolean notified;
  boolean child;
  Long enumerationItemId;
  boolean ignored;

  public long getDetectionConfigId() {
    return detectionConfigId;
  }

  public void setDetectionConfigId(long detectionConfigId) {
    this.detectionConfigId = detectionConfigId;
  }

  public long getAnomalyFeedbackId() {
    return anomalyFeedbackId;
  }

  public void setAnomalyFeedbackId(long anomalyFeedbackId) {
    this.anomalyFeedbackId = anomalyFeedbackId;
  }

  public long getFunctionId() {
    return functionId;
  }

  public void setFunctionId(long anomalyFunctionId) {
    this.functionId = anomalyFunctionId;
  }

  public String getCollection() {
    return collection;
  }

  public void setCollection(String collection) {
    this.collection = collection;
  }

  public DimensionMap getDimensions() {
    return dimensions;
  }

  public void setDimensions(DimensionMap dimensions) {
    this.dimensions = dimensions;
  }

  public long getEndTime() {
    return endTime;
  }

  public void setEndTime(long endTime) {
    this.endTime = endTime;
  }

  public String getMetric() {
    return metric;
  }

  public void setMetric(String metric) {
    this.metric = metric;
  }

  public long getMetricId() {
    return metricId;
  }

  public void setMetricId(long metricId) {
    this.metricId = metricId;
  }

  public long getStartTime() {
    return startTime;
  }

  public void setStartTime(long startTime) {
    this.startTime = startTime;
  }

  public boolean isNotified() {
    return notified;
  }

  public void setNotified(boolean notified) {
    this.notified = notified;
  }

  public boolean isChild() {
    return child;
  }

  public void setChild(boolean child) {
    this.child = child;
  }

  public Long getEnumerationItemId() {
    return enumerationItemId;
  }

  public MergedAnomalyResultIndex setEnumerationItemId(final Long enumerationItemId) {
    this.enumerationItemId = enumerationItemId;
    return this;
  }

  public boolean isIgnored() {
    return ignored;
  }

  public void setIgnored(final boolean ignored) {
    this.ignored = ignored;
  }
}
